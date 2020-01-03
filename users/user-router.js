const e = require("express");
const User = require("./user-model");
const Tribe = require("../tribes/tribe-model");
const { generateToken, uploader } = require("../utils");
const upload = require("../middlewares/multer");
const { validateUser, validateLogin } = require("../middlewares/validations");

const authRouter = e.Router();
const userRouter = e.Router();

authRouter.post(
  "/register",
  upload.any(),
  validateUser,
  async (req, res, next) => {
    try {
      const [{ path }] = req.files;
      const url = await uploader(path);
      const [user] = await User.create({ ...req.data, imgUrl: url });
      const token = generateToken(user);
      return res
        .status(200)
        .json({ message: `Welcome ${user.firstName}`, token });
    } catch (error) {
      return next(error);
    }
  }
);
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
