const {
  createAud,
  getAllAudiences,
  getOneAudience,
  delAud,
  updateAud,
} = require("../prisma/queries/audienceQueries");

const createAudience = async (req, res) => {
  const { title, subreddits, searchTerm } = req.body;

  if (!title || !Array.isArray(subreddits)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const newAudience = await createAud(
    title,
    subreddits,
    req.user.id,
    searchTerm,
  );

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

const getSingleAudience = async (req, res) => {
  const audience = await getOneAudience(req.params.id);
  if (audience) {
    return res.status(200).json(audience);
  }
  return res.status(404).json({ msg: "audience not found" });
};

const deleteAudience = async (req, res) => {
  const audience = await delAud(req.params.id);
  if (audience) {
    return res.status(200).json(audience);
  }
  return res.status(404).json({ msg: "failed to delete audience" });
};

const updateAudience = async (req, res) => {
  const { title, subreddits } = req.body;
  const audience = await updateAud(req.params.id, title, subreddits);
  if (audience) {
    return res.status(200).json(audience);
  }
  return res.status(400).json({ msg: "failed to update audience" });
};

module.exports = {
  createAudience,
  getAudiences,
  getSingleAudience,
  deleteAudience,
  updateAudience,
};
