const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  const option = {};
  try {
    const { id, username } = jwt.verify(token, secret, option);
    req.user = { id, username };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { restricted };
