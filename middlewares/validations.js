const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");

const { createError, generateToken } = require("../utils");
const { findByEmail } = require("../users/user-model");

const validateLogin = async (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  });

  try {
    const { email, password } = await loginSchema.validateAsync(req.body);
    const user = await findByEmail(email);
    if (user) {
      const validatedUser = await bcrypt.compare(password, user.password);
      const token = generateToken(validatedUser);

      return res.status(200).json({
        message: `Welcome ${user.firstName}`,
        token
      });
    }
    throw createError("invalid email or password");
  } catch (error) {
    return next(error);
  }
};

const validateUser = async (req, res, next) => {
  const userSchema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .max(30)
      .required(),

    lastName: Joi.string()
      .min(3)
      .max(30)
      .required(),

    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  });

  try {
    const value = await userSchema.validateAsync(req.body);
    const user = await findByEmail(value.email);
    if (user) {
      throw createError("email already used by another user", 400);
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(req.body.password, salt);
    req.data = { ...req.body, password: hash };
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { validateUser, validateLogin };
