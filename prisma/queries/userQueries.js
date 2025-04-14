const { generateUsername } = require("../../utils/helperFunctions");
const { prisma } = require("../prismaClient");

// Find user by email or id
const findUser = async (id = null, email = null) => {
  if (email) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return;
    } else {
      return user;
    }
  } else {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return;
    } else {
      return user;
    }
  }
};

const createUser = async (email, hashedPassword, username) => {
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, username },
  });
  console.log("user created", user);
  return user;
};

// Create user through OAuth
const createOAuthUser = async (profile) => {
  const email = profile.emails?.[0]?.value;
  const googleId = profile.id;

  let user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    // 2. If user exists but no googleId, update it
    if (!user.googleId) {
      user = await prisma.user.update({
        where: { email },
        data: {
          googleId,
          ...(user.photo ? {} : { photo: profile.photos?.[0]?.value }),
        },
      });
    }
  } else {
    // Else: acc doesnt exist
    user = await prisma.user.create({
      data: {
        email,
        googleId,
        username: generateUsername(profile),
        photo: profile.photos?.[0]?.value,
      },
    });
  }
  console.log("user with oauth", user);
  return user;
};

const updateRefreshToken = async (id, refresh) => {
  const user = await prisma.user.update({
    where: { id },
    data: {
      refreshToken: refresh,
    },
  });
  console.log("user refresh token updated", user);
  return user;
};

module.exports = {
  findUser,
  createUser,
  updateRefreshToken,
  createOAuthUser,
};
