const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const {
  findUser,
  createUser,
  updateRefreshToken,
} = require("../prisma/queries/userQueries");
const passport = require("../utils/passportConfig");
const jwt = require("jsonwebtoken");

// Register form validator
const registerFormValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email")
    .bail()
    .custom(async (value) => {
      const existingUser = await findUser(null, value);
      if (existingUser) {
        throw new Error("A user already exists with this e-mail address");
      }
    }),
  body("username")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Please enter a 5-character username"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Please enter an 8-digit password"),
  body("confirmPassword")
    .trim()
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password and confirm password do not match");
      }
    }),
];

// Login form validator
const loginFormValidator = [
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Please enter an 8-digit password"),
];

const postRegister = [
  registerFormValidator,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password, username } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, hashedPassword, username);
    return res.status(201).json({ msg: "user created", user });
  },
];

const postLogin = [
  loginFormValidator,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    passport.authenticate(
      "local",
      { session: false },
      async (err, user, info) => {
        if (!user) return res.status(401).json({ msg: info.message });

        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET,
          {
            expiresIn: "15m",
          },
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
        //  Refresh cookie
        return res
          .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development" ? false : true,
            sameSite:
              process.env.NODE_ENV === "development" ? "strict" : "none",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30d
          })
          .cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development" ? false : true,
            sameSite:
              process.env.NODE_ENV === "development" ? "strict" : "none", // Or 'Lax' depending on your needs
            maxAge: 15 * 60 * 1000, // 15m
          })
          .json({
            msg: "successfully logged in",
            user,
          });
      },
    )(req, res);
  },
];

module.exports = {
  postRegister,
  postLogin,
};
