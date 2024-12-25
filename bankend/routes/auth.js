const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Route to create a new user
router.post(
  "/",
  [
    // Validate input fields
    body("name", "Name must be at least 3 characters long").isLength({ min: 3 }),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Create a new user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Send a response with the newly created user
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        error: "Please use a unique value for the email field",
        message: err.message,
      });
    }
  }
);

module.exports = router;
