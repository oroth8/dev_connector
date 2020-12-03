const jwt = require("jsonwebtoken");
const config = require("config");

// Middle ware is access to req and res obejects and moves onto a "next"
module.exports = function (req, res, next) {
  // get token header
  const token = req.header("x-auth-token");
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // verify token
  try {
    //   decodes token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // allows to get user information
    req.user = decoded.user;
    next();
    // if token is expired
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
