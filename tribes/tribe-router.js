const router = require("express").Router();
const Tribe = require("./tribe-model");

// /api/tribes/
router.get("/", async (req, res, next) => {
  try {
    const tribes = await Tribe.list();
    return res.status(200).json(tribes);
  } catch (error) {
    return next(error);
  }
});

// /api/tribes/create
router.post("/create", async (req, res, next) => {
  try {
    const [tribe] = await Tribe.create(req.body);
    return res
      .status(201)
      .json({ message: `You've created ${tribe.name}`, tribe });
  } catch (error) {
    return next(error);
  }
});

// api/tribes/update
router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const [tribe] = await Tribe.update(id, req.body);
    return res
      .status(201)
      .json({ message: `You've updated ${tribe.name}`, tribe });
  } catch (error) {
    return next(error);
  }
});

// api/tribes/delete
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Tribe.remove(id);
    return res
      .status(202)
      .json({ message: `Tribe with id ${id} deleted successfully!` });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
