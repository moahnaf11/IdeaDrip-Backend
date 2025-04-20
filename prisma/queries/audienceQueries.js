const { prisma } = require("../prismaClient");

const createAud = async (title, subreddits, userId, searchTerm) => {
  const audience = await prisma.audience.create({
    data: {
      title,
      subreddits,
      userId,
      searchTerm,
    },
  });

  console.log("new audience created", audience);
  return audience;
};

const getAllAudiences = async (userId) => {
  const audiences = await prisma.audience.findMany({ where: { userId } });
  console.log(audiences);
  return audiences;
};

const getOneAudience = async (id) => {
  const audience = await prisma.audience.findUnique({ where: { id } });
  console.log("single audience", audience);
  return audience;
};

const delAud = async (id) => {
  const audience = await prisma.audience.delete({
    where: { id },
  });
  console.log("deleted audience", audience);
  return audience;
};

const updateAud = async (id, title, subreddits) => {
  const audience = await prisma.audience.update({
    where: { id },
    data: { title, subreddits },
  });

  console.log("updated audience", audience);
  return audience;
};

module.exports = {
  createAud,
  getAllAudiences,
  getOneAudience,
  delAud,
  updateAud,
};
