const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// Bring in user model for database
const User = require("../../models/Users");

// @route POST api/users
// @desc Register user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
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

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get Users gravatar
      const avatar = gravatar.url(email, {
        //   size
        s: "200",
        //   rating
        r: "pg",
        //   default
        d: "mm",
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      // Encrypt the password
      //   create password salt
      const salt = await bcrypt.genSalt(10);
      // bcrypt takes in two things, password and salt
      user.password = await bcrypt.hash(password, salt);
      //   save user
      await user.save();

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
