const { Strategy: LocalStrategy } = require("passport-local");
const { Strategy: JwtStrategy } = require("passport-jwt");
const passport = require("passport");
const { findUser, createOAuthUser } = require("../prisma/queries/userQueries");
const bcrypt = require("bcryptjs");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Local Strategy (Login)
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await findUser(null, email);
      if (!user) return done(null, false, { message: "Incorrect email" });
      if (!user.password) {
        return done(null, false, {
          message:
            "This account uses Google Sign-In. Please log in with Google.",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: "Incorrect password" });

      return done(null, user);
    },
  ),
);

const cookieExtractor = (req) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["jwt"];
  }

  return jwt;
};

// JWT Strategy (Protect Routes)
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await findUser(jwtPayload.id);
        if (user) return done(null, user);
        else return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);

// Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Client secret
      callbackURL:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/users/google/callback"
          : null,
    },
    async function (token, tokenSecret, profile, done) {
      try {
        console.log("profile in passport middleware", profile);
        const user = await createOAuthUser(profile);
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

module.exports = passport;
