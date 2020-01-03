const router = require("express").Router();
const { createError } = require("../utils");
const Project = require("./project-model");

// GET /api/projects
router.get("/", async (req, res, next) => {
  try {
    const tribes = await Project.list();
    return res.status(200).json(tribes);
  } catch (error) {
    return next(error);
  }
});

// POST /api/projects
router.post("/", async (req, res, next) => {
  try {
    const [project] = await Project.create(req.body);
    return res.status(201).json({ project });
  } catch (error) {
    return next(error);
  }
});

// PUT api/projects/:id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const [project] = await Project.update(id, req.body);
    return res.status(201).json({ project });
  } catch (error) {
    return next(error);
  }
});

// DELETE api/projects/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await Project.remove(id);
    if (rows) {
      return res
        .status(202)
        .json({ message: `Project with id ${id} deleted successfully!` });
    }
    throw createError("Unable to delete project", 500);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
