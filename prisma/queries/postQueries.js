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

const saveClassified = async (filteredPosts, isPain) => {
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
          isPain,
          subreddit: {
            connect: { name: post.subreddit.name },
          },
        },
        include: { subreddit: true },
      });
    }),
  );
  console.log("saved after classify", saved.length);
  return saved;
};

const toggle = async (userId, postId) => {
  const existing = await prisma.savedPost.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  if (existing) {
    // Unsave
    await prisma.savedPost.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
    console.log("unsaved");
    return { existing, saved: false };
  } else {
    // Save
    await prisma.savedPost.create({
      data: {
        userId,
        postId,
      },
    });
    console.log("saved");
    return { existing, saved: true };
  }
};

const getSaved = async (userId) => {
  const savedPosts = await prisma.savedPost.findMany({
    where: { userId },
    include: {
      post: {
        include: {
          subreddit: true,
        },
      },
    },
    orderBy: { savedAt: "desc" },
  });
  console.log("returned saved", savedPosts.length);
  return savedPosts;
};

const getSavedPostsForUserInSubs = async (userId, subreddits) => {
  return prisma.savedPost.findMany({
    where: {
      userId,
      post: {
        subreddit: {
          name: {
            in: subreddits.map((s) => s.name),
          },
        },
      },
    },
    include: {
      post: true,
    },
  });
};

module.exports = {
  getExistingPosts,
  saveClassified,
  toggle,
  getSaved,
  getSavedPostsForUserInSubs,
};
