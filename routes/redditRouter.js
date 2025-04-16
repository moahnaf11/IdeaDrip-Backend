const express = require("express");
const {
  fetchPost,
  fetchSubreddits,
} = require("../controllers/redditController");
const redditRouter = express.Router();

redditRouter.get("/reddit-posts", fetchPost);
redditRouter.get("/reddit-subreddits", fetchSubreddits);

module.exports = {
  redditRouter,
};
