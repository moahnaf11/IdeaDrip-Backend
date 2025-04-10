const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const { findUser, createUser } = require("../prisma/queries/userQueries");
const passport = require("../utils/passportConfig");
const jwt = require("jsonwebtoken");

// register form validator
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

// login form validator
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
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ msg: info.message });

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        {
          expiresIn: "15s",
        }
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: false, 
        sameSite: "Strict", // or 'Lax' depending on your needs
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      return res.json({
        msg: "succesfully logged in",
        user,
      });
    })(req, res);
  },
];

module.exports = {
  postRegister,
  postLogin,
};
