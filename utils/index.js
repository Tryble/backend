const jwt = require("jsonwebtoken");

const { secret } = require("../config");
const cloudinary = require("./cloudinary");

const createError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;

  return error;
};

const generateToken = user => {
  const { id, email } = user;
  const payload = { id, email };
  const option = {};
  const token = jwt.sign(payload, secret, option);
  return token;
};

const uploader = async path => await cloudinary.uploads(path, "Images");

module.exports = {
  createError,
  generateToken,
  uploader
};
