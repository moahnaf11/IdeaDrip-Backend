from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import time
import os

os.environ["PYTORCH_CUDA_ALLOC_CONF"] = "expandable_segments:True"
app = FastAPI()

# Load emotion model
MODEL_NAME = "j-hartmann/emotion-english-distilroberta-base"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME, torch_dtype=torch.bfloat16
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
model.eval()
print("Emotion model loaded on:", device)

# Label mappings
id2label = model.config.id2label
label2id = {v: k for k, v in id2label.items()}

# We're only interested in these two emotions
TARGET_LABELS = ["anger", "disgust"]
TARGET_INDICES = [label2id[label] for label in TARGET_LABELS]


class EmotionRequest(BaseModel):
    texts: list[str]
    threshold: float = 0.85


@app.post("/classify", response_model=dict)
async def classify_emotions(req: EmotionRequest):
    start_time = time.perf_counter()
    texts = req.texts
    results = []
    batch_size = 16

    if not texts:
        return {"results": []}

    with torch.no_grad():
        for i in range(0, len(texts), batch_size):
            batch = texts[i : i + batch_size]
            inputs = tokenizer(
                batch,
                return_tensors="pt",
                padding=True,
                truncation=True,
                max_length=512,
            )
            inputs = {k: v.to(device) for k, v in inputs.items()}

            with torch.amp.autocast(device_type="cuda"):
                logits = model(**inputs).logits

            probs = torch.softmax(logits, dim=-1).cpu().numpy()

            for text, prob in zip(batch, probs):
                emotion_scores = {
                    id2label[idx]: prob[idx]
                    for idx in TARGET_INDICES
                    if prob[idx] > req.threshold
                }

                if emotion_scores:
                    # Get the emotion with the highest score
                    top_emotion = max(emotion_scores.items(), key=lambda x: x[1])
                    results.append(
                        {
                            "text": text,
                            "emotion": {
                                "label": top_emotion[0],
                                "score": round(float(top_emotion[1]), 4),
                            },
                        }
                    )

    elapsed = time.perf_counter() - start_time
    print(f"Filtered {len(results)} of {len(texts)} texts in {elapsed:.2f}s")
    print(results)
    return {"results": results}
