const router=require("express").Router();
const {AwardModel}=require("../db/allmodels.js")
const {validateAwardData}=require("../middleware")
  
router.post("/", validateAwardData("body"), async (req, res, next) => {
  try {
    const { content, organization, date } = req.body;
    const createdPost = await AwardModel.create({ content, organization, date });

    res.status(201).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});
  
router.put("/:id", validateAwardData("body"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, organization, date }= req.body;

    const updatedPost = await AwardModel.findOneAndUpdate(
      { _id: id },
      { content, organization, date }, 
      {
        runValidators: true,
        new: true,
      }
    ).lean();

    res.json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

router.post("/", validateAwardData("body"), async (req, res, next) => {
  try {
    const { content, organization, date } = req.body;
    const createdPost = await AwardModel.create({ content, organization, date });

    res.status(201).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAward = await AwardModel.findOneAndDelete({ _id: id }).lean();

    if (!deletedAward) {
      return res.status(404).json({ error: "Award not found" });
    }

    res.json({ message: "Award deleted successfully", data: deletedAward });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;