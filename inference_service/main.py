from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np
import time
import os

os.environ["PYTORCH_CUDA_ALLOC_CONF"] = "expandable_segments:True"
app = FastAPI()

# Load model and tokenizer once
MODEL_NAME = "MoritzLaurer/DeBERTa-v3-base-mnli-fever-anli"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME, torch_dtype=torch.float16
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
model.eval()
print("Model loaded on:", device)


class ClassificationRequest(BaseModel):
    texts: list[str]
    labels: list[str]
    threshold: float = 0.7
    min_labels_required: int = 3


@app.post("/classify", response_model=dict)
async def classify(req: ClassificationRequest):
    start_time = time.perf_counter()
    texts, labels = req.texts, req.labels
    num_texts, num_labels = len(texts), len(labels)

    if not texts or not labels:
        return {"results": []}
    total_pairs = num_texts * num_labels
    print(
        f"🔢 Processing {num_texts} texts × {num_labels} labels = {total_pairs} pairs"
    )

    # Prepare inputs in chunks to avoid OOM
    results = []
    batch_size = 16  # smaller to avoid OOM on 6GB GPU

    with torch.no_grad():
        for i in range(0, num_texts, batch_size):
            chunk_texts = texts[i : i + batch_size]
            chunk_results = []

            # For each text in the chunk, pair with all labels
            for text in chunk_texts:
                premise_batch = [text] * num_labels
                hypothesis_batch = labels

                # Tokenize and move to device
                inputs = tokenizer(
                    premise_batch,
                    hypothesis_batch,
                    return_tensors="pt",
                    padding=True,
                    truncation=True,
                    max_length=512,
                )
                inputs = {k: v.to(device) for k, v in inputs.items()}

                # Forward pass with float16 autocast
                with torch.amp.autocast(device_type="cuda"):
                    logits = model(**inputs).logits

                probs = (
                    torch.softmax(logits, dim=1)[:, 2].cpu().numpy()
                )  # entailment class
                selected_labels = [
                    label
                    for label, score in zip(labels, probs)
                    if score >= req.threshold
                ]

                if len(selected_labels) >= req.min_labels_required:
                    chunk_results.append({"text": text, "labels": selected_labels})

                # Optional: free up memory
                torch.cuda.empty_cache()

            results.extend(chunk_results)
            print(f"returned {len(results)}")

    elapsed = time.perf_counter() - start_time
    print(f"Inference for {num_texts} texts took {elapsed:.2f}s")

    return {"results": results}
