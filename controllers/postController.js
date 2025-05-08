const { toggle, getSaved } = require("../prisma/queries/postQueries");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const toggleSavePost = async (req, res) => {
  const userId = req.user.id;
  const { postId } = req.body;

  if (!postId) {
    return res.status(400).json({ error: "postId is required" });
  }
  const post = await toggle(userId, postId);
  return res.status(200).json(post);
};

const getSavedPosts = async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const saved = await getSaved(userId);
  return res.status(200).json(saved);
};

const summarizeAndPitch = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res
      .status(400)
      .json({ error: "Text is required in the request body." });
  }

  try {
    const prompt = `
You are a helpful business assistant.
Given the following Reddit post or comment thread, do two things:
1. Summarize it in plain English.
2. Generate a unique business idea inspired by the discussion.

Reddit Text:
"""
${text}
"""

Return the result as:
Summary: ...
Business Idea: ...
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful and creative assistant.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
    });

    const output = completion.choices[0].message.content;
    res.json({ result: output });
  } catch (error) {
    console.log("OpenAI error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};

module.exports = { toggleSavePost, getSavedPosts, summarizeAndPitch };
