const router=require("express").Router();
const {ProjectModel}=require("../db/allmodels")
const {validateProjectData}=require("../middleware")

  
router.post("/",validateProjectData("body"), async (req, res, next) => {
  try {
    console.log("프로젝트 정보 추가하는 중...");

    const {title, startDate, endDate, role} = req.body;
    const userId= req.user._id;
    const createdPost = await ProjectModel.create({title, startDate, endDate, role, userId});

    res.status(200).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateProjectData("body"), async (req, res, next) => {
  try {
    console.log("프로젝트 정보 수정하는 중...");

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
    console.log("프로젝트 정보 삭제하는 중...");

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
  