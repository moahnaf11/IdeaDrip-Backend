const { prisma } = require("../prismaClient");

const getExistingPosts = async (urls) => {
  const existingPosts = await prisma.post.findMany({
    where: {
      url: {
        in: urls,
      },
    },

    include: { subreddit: true },
  });
  console.log("existing posts", existingPosts);
  return existingPosts;
};

const saveClassified = async (filteredPosts) => {
  const saved = await Promise.all(
    filteredPosts.map(async (post) => {
      return await prisma.post.create({
        data: {
          title: post.title,
          url: post.url,
          upvotes: post.upvotes,
          comments: post.comments,
          author: post.author,
          flair: post.flair,
          selftext: post.selftext,
          subreddit: {
            connect: { name: post.subreddit.name },
          },
        },
        include: { subreddit: true },
      });
    }),
  );
  console.log("saved after classify", saved.length);
};

module.exports = { getExistingPosts, saveClassified };
