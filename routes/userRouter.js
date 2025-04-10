const express = require("express");
const { postRegister, postLogin } = require("../controllers/userController");
const passport = require("passport");
const userRouter = express.Router();

userRouter.post("/register", postRegister);
userRouter.post("/login", postLogin);
userRouter.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  }
);

module.exports = { userRouter };
