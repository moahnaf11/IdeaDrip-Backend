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
  .get(passport.authenticate("jwt", { session: false }), getSingleAudience)
  .delete(passport.authenticate("jwt", { session: false }), deleteAudience)
  .put(passport.authenticate("jwt", { session: false }), updateAudience);

module.exports = {
  audienceRouter,
};
