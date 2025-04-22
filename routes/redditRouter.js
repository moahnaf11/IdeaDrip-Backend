const express = require("express");
const {
  fetchPost,
  fetchSpecificSubs,
} = require("../controllers/redditController");
const redditRouter = express.Router();

redditRouter.post("/reddit-posts", fetchPost);
redditRouter.get("/reddit-specific-subreddit", fetchSpecificSubs);

module.exports = {
  redditRouter,
};
