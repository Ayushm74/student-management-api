const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const { login } = require("../controllers/authController");

const router = express.Router();

router.post(
  "/login",
  [
    body("username").notEmpty(),
    body("password").isLength({ min: 5 })
  ],
  validate,
  login
);

module.exports = router;