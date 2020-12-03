const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

// @route GET api/auth
// @desc test route
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    //   specify how you want to find a user in the DB and what you want from the db. Everything but password here
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error (auth)");
  }
});

// @route POST api/auth
// @desc Authenticate User and get Token
// @access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  //   need to add async to make async await
  async (req, res) => {
    //   if error from validation, store in errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If errors array is not empty then send status of what is in errors array
      return res.status(400).json({ errors: errors.array() });
    }
    // Grab whatever data from post with req.body
    //  console.log(req.body);
    // destruction req.body so we dont have to retype

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      // Return jsonwebtoken
      const payload = {
        user: {
          //  grab mongodb id
          id: user._id,
        },
      };
      //   Grabs payload and jwtToken from config

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        //   expiresIn: sets token expiration time in seconds
        { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error (user)");
    }
  }
);

module.exports = router;
