const e = require("express");
const User = require("./user-model");
const Tribe = require("../tribes/tribe-model");
const { generateToken } = require("../utils");
const { validateUser, validateLogin } = require("../middlewares/validations");

const authRouter = e.Router();
const userRouter = e.Router();

authRouter.post("/register", validateUser, async (req, res, next) => {
  try {
    const [user] = await User.create(req.data);
    const token = generateToken(user);
    return res
      .status(200)
      .json({ message: `Welcome ${user.firstName}`, token });
  } catch (error) {
    return next(error);
  }
});
// POST /api/auth/login
authRouter.post("/login", validateLogin);

// GET /api/user/tribes
userRouter.get("/tribes", async (req, res, next) => {
  try {
    const tribes = Tribe.tribesByUser(req.user.id);
    return res.json(200).json(tribes);
  } catch (error) {
    return next(error);
  }
});

module.exports = { authRouter, userRouter };
