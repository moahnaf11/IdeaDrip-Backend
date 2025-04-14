const express = require("express");
const { postRegister, postLogin } = require("../controllers/userController");
const passport = require("../utils/passportConfig");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const {
  findUser,
  updateRefreshToken,
} = require("../prisma/queries/userQueries");

userRouter.post("/register", postRegister);
userRouter.post("/login", postLogin);
userRouter.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ user: req.user });
  },
);
userRouter.get("/logout", async (req, res) => {
  const refreshToken = req.cookies["refreshToken"];
  if (req.cookies["jwt"] || refreshToken) {
    res.clearCookie("jwt").clearCookie("refreshToken").status(200).json({
      msg: "You have logged out",
    });
  } else {
    res.status(401).json({
      msg: "Invalid jwt",
    });
  }
  jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: "Invalid or expired token" });
    }
    await updateRefreshToken(decoded.id, null);
  });
});

userRouter.get("/refresh", async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ error: "No refresh token" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Invalid or expired token" });
    }

    const user = await findUser(decoded.id);

    if (!user || user.refreshToken !== token) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    return res
      .cookie("jwt", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? "strict" : "none",
        maxAge: 15 * 60 * 1000, // 15m
      })
      .json({ message: "Token refreshed" });
  });
});

// Google OAuth routes
/* Route to start OAuth2 authentication */
userRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

/* Callback route for OAuth2 authentication */
userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    // Successful authentication
    console.log("req.user in callback", req.user);
    const user = req.user;
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    // Refresh token
    const refreshToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
    );
    // Update refresh token in db
    await updateRefreshToken(user.id, refreshToken);

    // Set cookie with token
    return res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? "strict" : "none",
        maxAge: 15 * 60 * 1000, // 15ms
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? "strict" : "none",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30d
      })
      .redirect(
        process.env.NODE_ENV === "development" ? "http://localhost:5173/" : "",
      );
  },
);

module.exports = { userRouter };
