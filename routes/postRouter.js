const express = require("express");
const passport = require("../utils/passportConfig");
const {
  toggleSavePost,
  getSavedPosts,
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

module.exports = { postRouter };
