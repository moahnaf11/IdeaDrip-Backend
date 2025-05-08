const express = require("express");
const passport = require("../utils/passportConfig");
const {
  toggleSavePost,
  getSavedPosts,
  summarizeAndPitch,
} = require("../controllers/postController");
const postRouter = express.Router();

postRouter.post(
  "/toggle",
  passport.authenticate("jwt", { session: false }),
  toggleSavePost,
);
postRouter.get(
  "/saved",
  passport.authenticate("jwt", { session: false }),
  getSavedPosts,
);
postRouter.post(
  "/summarize",
  passport.authenticate("jwt", { session: false }),
  summarizeAndPitch,
);

module.exports = { postRouter };
