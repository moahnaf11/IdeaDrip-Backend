const express = require("express");
const passport = require("../utils/passportConfig");
const {
  fetchPost,
  fetchSpecificSubs,
} = require("../controllers/redditController");
const redditRouter = express.Router();

redditRouter.post(
  "/reddit-posts",
  passport.authenticate("jwt", { session: false }),
  fetchPost,
);
redditRouter.get(
  "/reddit-specific-subreddit",
  passport.authenticate("jwt", { session: false }),
  fetchSpecificSubs,
);

module.exports = {
  redditRouter,
};
