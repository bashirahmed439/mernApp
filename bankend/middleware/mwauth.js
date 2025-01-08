var jwt = require("jsonwebtoken");
require('dotenv').config();
const fetchusertoken = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).send({ error: "Please authernticate using valid token" });
    }
    const data = jwt.verify(token, 'THISISSECRETTOKEN123');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = fetchusertoken;
