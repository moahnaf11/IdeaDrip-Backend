const { toggle, getSaved } = require("../prisma/queries/postQueries");

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

module.exports = { toggleSavePost, getSavedPosts };
