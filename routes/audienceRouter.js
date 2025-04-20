const express = require("express");
const {
  createAudience,
  getAudiences,
  getSingleAudience,
  deleteAudience,
  updateAudience,
} = require("../controllers/audienceController");
const passport = require("../utils/passportConfig");

const audienceRouter = express.Router();
audienceRouter
  .route("/")
  .post(passport.authenticate("jwt", { session: false }), createAudience)
  .get(passport.authenticate("jwt", { session: false }), getAudiences);
audienceRouter
  .route("/:id")
  .get(getSingleAudience)
  .delete(deleteAudience)
  .put(updateAudience);

module.exports = {
  audienceRouter,
};
