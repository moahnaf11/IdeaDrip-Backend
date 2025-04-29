const { default: fetch } = require("node-fetch");

const labels = [
  "frustration",
  "pain",
  "anger",
  "help",
  "struggle",
  "complaint",
];

async function classifyPainPoints(posts = []) {
  const batchSize = 20;
  const concurrencyLimit = 3; // How many batches at once
  const batches = [];

  // Prepare all batch functions first
  for (let i = 0; i < posts.length; i += batchSize) {
    const batch = posts.slice(i, i + batchSize);

    const textToPostMap = new Map();
    const texts = batch.map((post) => {
      const text = `${post.title || ""} ${post.selftext || ""}`.slice(0, 1024);
      textToPostMap.set(text, post);
      return text;
    });

    const body = {
      texts,
      labels,
      threshold: 0.5,
      min_labels_required: 3,
    };

    const batchIndex = i / batchSize;
    const batchLabel = `Batch ${batchIndex}`;

    const batchFunction = async () => {
      console.time(batchLabel);
      try {
        const res = await fetch(
          "https://abe9-34-91-244-222.ngrok-free.app/classify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          },
        );

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Error ${res.status}: ${errorText}`);
        }

        const { results: classified } = await res.json();
        console.timeEnd(batchLabel);
        return classified
          .map(({ text }) => textToPostMap.get(text))
          .filter(Boolean);
      } catch (err) {
        console.error(`Batch error (${batchLabel}):`, err.message);
        console.timeEnd(batchLabel);
        return [];
      }
    };

    batches.push(batchFunction);
  }

  // Function to run batches with concurrency control
  async function runBatchesWithConcurrency(batches, limit) {
    const results = [];
    const executing = [];

    for (const batch of batches) {
      const p = batch().then((result) => {
        results.push(...result);
      });
      executing.push(p);

      if (executing.length >= limit) {
        await Promise.race(executing);
        // Remove finished promises
        for (let i = executing.length - 1; i >= 0; i--) {
          if (executing[i].isFulfilled || executing[i].isRejected) {
            executing.splice(i, 1);
          }
        }
      }
    }

    await Promise.all(executing);
    return results;
  }

  // Patch Promise to track fulfilled/rejected status
  function trackPromise(promise) {
    promise.isFulfilled = false;
    promise.isRejected = false;
    promise.then(
      () => (promise.isFulfilled = true),
      () => (promise.isRejected = true),
    );
    return promise;
  }

  // Wrap each batch with tracking
  const trackedBatches = batches.map((batch) => {
    return () => trackPromise(batch());
  });

  const finalResults = await runBatchesWithConcurrency(
    trackedBatches,
    concurrencyLimit,
  );

  console.log("Filtered results:", finalResults);
  return finalResults;
}

module.exports = { classifyPainPoints };
