const { prisma } = require("../prismaClient");

const createAud = async (title, subreddits, userId, searchTerm = "") => {
  const audience = await prisma.audience.create({
    data: {
      title,
      userId,
      searchTerm,
      subreddits: {
        connectOrCreate: subreddits.map((sub) => ({
          where: { name: sub.name },
          create: {
            name: sub.name,
            title: sub.title,
            subscribers: sub.subscribers,
            icon: sub.icon,
            url: sub.url,
          },
        })),
      },
    },
    include: {
      subreddits: true,
    },
  });

  console.log("new audience created", audience);
  return audience;
};

const getAllAudiences = async (userId) => {
  const audiences = await prisma.audience.findMany({
    where: { userId },
    include: { subreddits: true },
  });
  console.log(audiences);
  return audiences;
};

const getOneAudience = async (id) => {
  const audience = await prisma.audience.findUnique({
    where: { id },
    include: { subreddits: true },
  });
  console.log("single audience", audience);
  return audience;
};

const delAud = async (id) => {
  const deletedAud = await prisma.audience.findUnique({
    where: { id },
    include: { subreddits: true },
  });

  if (!deletedAud) {
    return deletedAud;
  }

  const subredditIds = deletedAud.subreddits.map((sub) => ({ id: sub.id }));
  await prisma.audience.update({
    where: { id },
    data: {
      subreddits: {
        disconnect: subredditIds,
      },
    },
  });
  const audience = await prisma.audience.delete({
    where: { id },
    include: { subreddits: true },
  });

  console.log("Deleted audience and related subreddits", audience);
  return audience;
};

const updateAud = async (id, title, subreddits) => {
  const audience = await prisma.audience.update({
    where: { id },
    data: {
      title,
      subreddits: {
        connectOrCreate: subreddits.map((sub) => ({
          where: { name: sub.name },
          create: {
            name: sub.name,
            title: sub.title,
            subscribers: Number(sub.subscribers),
            icon: sub.icon,
            url: sub.url,
          },
        })),
        set: subreddits.map((sub) => ({ name: sub.name })),
      },
    },
    include: {
      subreddits: true,
    },
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
