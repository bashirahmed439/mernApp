const express = require("express");
require('dotenv').config();
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const Common = require("../models/common.model"); // Correct path to common.model.js
const bcryptjs = require("bcryptjs");
const UserValidatoinRules = require("../validators/user.validations");
const fetchusertoken = require("../middleware/mwauth");
const jwt = require("jsonwebtoken");
// Route to create a new user
router.post("/", UserValidatoinRules.rule("SaveUser"), async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log(req.body.email);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user.name);
      return res
        .status(400)
        .json({ error: "Sorry, A user with this email already exists." });
    }

    const salt = await bcryptjs.genSalt(10);
    const secPass = await bcryptjs.hashSync(req.body.password, salt);

    // Instead of creating the user manually, use the Common.insert method
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    };

    // Use the Common.insert method to insert the user
    await Common.insert(userData, User, req.body.name);

    // Send a response with the newly created user
    res.json(userData); // You can modify this to send back a successful response or the actual user
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: err.message,
    });
  }
});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcryptjs.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, 'THISISSECRETTOKEN123');
      success = true;
      res.json({ success, authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
);

router.post("/getuserdetails", fetchusertoken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.send(user);
  } catch (error) {
    console.error(error.message);
      res.status(500).send(error.message);
  }
});

module.exports = router;
