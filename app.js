// packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client");

// routers
const { userRouter } = require("./routes/userRouter");

dotenv.config();
const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/users", userRouter);

// error handler middleware
app.use((err, req, res, next) => {
  // Log the error for details.
  console.error("An error occurred was encountered:", err);
  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2000") {
      res.status(422).json({
        statusCode: 422,
        errors: null,
        message: "The provided data exceeds the maximum allowed length.",
        success: false,
      });
    } else if (err.code === "P2002") {
      res.status(409).json({
        statusCode: 409,
        errors: null,
        message: "The data already exists.",
        success: false,
      });
    } else {
      res.status(500).json({
        statusCode: 500,
        errors: null,
        message: "Something went wrong in Prisma. Please try again later.",
        success: false,
      });
    }
  } else {
    res;
    res.status(500).json({
      statusCode: 500,
      errors: null,
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
