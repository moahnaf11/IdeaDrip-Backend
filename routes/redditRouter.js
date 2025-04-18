const express = require("express");
const {
  fetchPost,
  fetchSubreddits,
  fetchSpecificSubs,
} = require("../controllers/redditController");
const redditRouter = express.Router();

redditRouter.get("/reddit-posts", fetchPost);
redditRouter.get("/reddit-subreddits", fetchSubreddits);
redditRouter.get("/reddit-specific-subreddit", fetchSpecificSubs);

module.exports = {
  redditRouter,
};
