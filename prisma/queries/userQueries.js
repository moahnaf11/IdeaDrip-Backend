const { prisma } = require("../prismaClient");

// find user by email or id
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
  updateRefreshToken
};
