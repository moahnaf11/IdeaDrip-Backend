const express = require("express");
const {
  createAudience,
  getAudiences,
  getSingleAudience,
} = require("../controllers/audienceController");
const passport = require("../utils/passportConfig");

const audienceRouter = express.Router();
audienceRouter
  .route("/")
  .post(passport.authenticate("jwt", { session: false }), createAudience)
  .get(passport.authenticate("jwt", { session: false }), getAudiences);
audienceRouter.get("/:id", getSingleAudience);

module.exports = {
  audienceRouter,
};
