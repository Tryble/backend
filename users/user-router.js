const router = require("express").Router();
const User = require("./user-model");
const { generateToken } = require("../utils");
const { validateUser, validateLogin } = require("../middlewares/validations");

router.post("/register", validateUser, async (req, res, next) => {
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

router.post("/login", validateLogin);

module.exports = router;
