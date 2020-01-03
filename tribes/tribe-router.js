const router = require("express").Router();
const Tribe = require("./tribe-model");
const { restricted } = require("../middlewares/auth");

// /api/tribes/
router.get('/', restricted, async (req, res, next) => {
  try {
    const [tribe] = await Tribe.list();
    return res
      .status(200)
      .json({tribe});
  } catch(error) {
    return next(error);
  }
})


// /api/tribes/create
router.post('/create', restricted,  async (req, res, next) => {
    try {
        const [tribe] = await Tribe.create(req.body);
        return res
          .status(201)
          .json({ message: `You've created ${tribe.name}`});
      } catch (error) {
        return next(error);
      }
})

// api/tribes/update
router.put('/update', restricted, async (req, res, next) => {
    try {
      id = req.body.id;
      changes = req.body;
    const [tribe] = await Tribe.update(id, changes)
    return res
    .status(201)
    .json({message: `You've updated ${tribe.name}`})
    
    } catch (error) {
      return next(error);
    }
})

// api/tribes/delete
router.delete('/delete/:id', restricted, async (req, res, next) => {
  try {
    id = req.params.id;
    const [tribe] = await Tribe.remove(id)
    return res
    .status(202)
    .json({message: tribe})
  } catch (error) {
    return next(error);
  }
})


module.exports = router;