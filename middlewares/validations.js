const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");

const { createError, generateToken } = require("../utils");
const { findEmail, findUsername } = require("../users/user-model");

const validateLogin = async (req, res, next) => {
  const loginSchema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  });

  try {
    const { username, password } = await loginSchema.validateAsync(req.body);
    const user = await findUsername(username);
    if (user) {
      const validatedUser = await bcrypt.compare(password, user.password);
      const token = generateToken(validatedUser);

      return res.status(200).json({
        message: `Welcome ${username}`,
        token
      });
    }
    throw createError("invalid username or password");
  } catch (error) {
    return next(error);
  }
};

const validateUser = async (req, res, next) => {
  const userSchema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    full_name: Joi.string()
      .min(3)
      .max(30)
      .required(),

    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required(),

    city: Joi.string()
      .min(3)
      .max(30)
      .required()
  });

  try {
    const value = await userSchema.validateAsync(req.body);
    const [email, username] = await Promise.all([
      findEmail(value.email),
      findUsername(value.username)
    ]);
    if (username) {
      throw createError("username already taken", 400);
    } else if (email) {
      throw createError("email already used by another user", 400);
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { validateUser, validateLogin };
