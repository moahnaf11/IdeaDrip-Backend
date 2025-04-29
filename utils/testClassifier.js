const { classifyPainPoints } = require("./painClassifier");

(async () => {
  const mockPosts = [
    {
      title: "I'm struggling to understand this topic.",
      selftext: "No matter how hard I try, it doesn't make sense.",
    },
    {
      title: "Happy vibes only!",
      selftext: "Everything is going well in my life.",
    },
  ];

  const results = await classifyPainPoints(mockPosts);
  console.log("Final filtered posts:", results);
})();
