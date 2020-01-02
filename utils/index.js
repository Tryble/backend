const jwt = require("jsonwebtoken");

const { secret } = require("../config");

const createError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;

  return error;
};

const generateToken = user => {
  const { id, username } = user;
  const payload = { id, username };
  const option = {};
  const token = jwt.sign(payload, secret, option);
  return token;
};

module.exports = {
  createError,
  generateToken
};
