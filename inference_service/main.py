from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import time

app = FastAPI()

# Load model and tokenizer
model_name = "facebook/bart-large-mnli"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

# Move model to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
print("Using device:", device)


class ClassificationRequest(BaseModel):
    texts: list[str]
    labels: list[str]
    threshold: float = 0.7
    min_labels_required: int = 3


@app.post("/classify")
async def classify(req: ClassificationRequest):
    start = time.perf_counter()

    texts = req.texts
    labels = req.labels

    # Create all pairs: (text, label)
    pairs = [(text, label) for text in texts for label in labels]
    premise_batch, hypothesis_batch = zip(*pairs)

    # Tokenize all at once
    inputs = tokenizer(
        list(premise_batch),
        list(hypothesis_batch),
        return_tensors="pt",
        truncation=True,
        padding=True,
    ).to(device)

    # Predict in one go
    with torch.no_grad():
        logits = model(**inputs).logits

    # Extract entailment scores (index 2)
    entailment_scores = torch.softmax(logits, dim=1)[:, 2]
    entailment_scores = entailment_scores.cpu().tolist()

    # Reshape into (num_texts x num_labels)
    num_texts = len(texts)
    num_labels = len(labels)

    results = []
    for i in range(num_texts):
        row_scores = entailment_scores[i * num_labels : (i + 1) * num_labels]
        selected = [
            label for label, score in zip(labels, row_scores) if score >= req.threshold
        ]
        if len(selected) >= req.min_labels_required:
            results.append({"text": texts[i], "labels": selected})

    end = time.perf_counter()
    print(f"Inference time for {len(texts)} texts: {end - start:.2f} seconds")

    return {"results": results}
