const { PrismaClient } = require("../db/prisma");
const prisma = new PrismaClient();

module.exports = {
  prisma,
};
