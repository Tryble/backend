const router = require("express").Router();
const { createError } = require("../utils");
const Tribe = require("./tribe-model");

//  GET /api/tribes
router.get("/", async (req, res, next) => {
  try {
    const tribes = await Tribe.list();
    return res.status(200).json(tribes);
  } catch (error) {
    return next(error);
  }
});

// POST /api/tribes
router.post("/create", async (req, res, next) => {
  try {
    const [tribe] = await Tribe.create(req.body);
    return res.status(201).json({ tribe });
  } catch (error) {
    return next(error);
  }
});

// PUT api/tribes/:id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const [tribe] = await Tribe.update(id, req.body);
    return res.status(201).json({ tribe });
  } catch (error) {
    return next(error);
  }
});

// DELETE api/tribes/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await Tribe.remove(id);
    if (rows) {
      return res
        .status(202)
        .json({ message: `Tribe with id ${id} deleted successfully!` });
    }
    throw createError("Unable to delete tribe", 500);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
