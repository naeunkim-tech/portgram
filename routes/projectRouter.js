const router=require("express").Router();
const {ProjectModel}=require("../db/allmodels")
const {validateProjectData}=require("../middleware")

  
router.post("/",validateProjectData("body"), async (req, res, next) => {
  try {
    const {title, startDate, endDate, role} = req.body;
    const createdPost = await ProjectModel.create({title, startDate, endDate, role});

    res.status(200).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateProjectData("body"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const {title, startDate, endDate, role}= req.body;

    const updatedPost = await ProjectModel.findOneAndUpdate(
      { _id: id },
      {title, startDate, endDate, role}, 
      {
        runValidators: true,
        new: true,
      }
    ).lean();

    res.status(200).json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await ProjectModel.findOneAndDelete({ _id: id }).lean();

    if (!deletedPost) {
      return res.status(404).json({ error: "Award not found" });
    }

    res.status(200).json({ message: "Award deleted successfully",  error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;
  