const {
  createAud,
  getAllAudiences,
} = require("../prisma/queries/audienceQueries");

const createAudience = async (req, res) => {
  const { title, subreddits } = req.body;

  if (!title || !Array.isArray(subreddits)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const newAudience = await createAud(title, subreddits, req.user.id);

  return res.status(201).json(newAudience);
};

const getAudiences = async (req, res) => {
  console.log(req.user.id);
  const audiences = await getAllAudiences(req.user.id);
  if (audiences.length) {
    return res.status(200).json(audiences);
  }
  return res.status(404).json({ msg: "no audiences found" });
};

module.exports = { createAudience, getAudiences };
