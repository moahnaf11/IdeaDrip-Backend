const { prisma } = require("../prismaClient");

const createAud = async (title, subreddits, userId) => {
  const audience = await prisma.audience.create({
    data: {
      title,
      subreddits,
      userId,
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

module.exports = { createAud, getAllAudiences };
