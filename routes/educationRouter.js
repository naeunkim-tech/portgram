const router=require("express").Router();
const {EducationModel}=require("../db/allmodels")
const {validateEducationData}=require("../middleware")
const loginRequired=require("../middleware/login-required")

// router.get("/", async (req, res, next) => {
//   try {
    
//     const educations = await EducationModel.find();

//     res.status(200).json({ data: educations, error: null });
//   } catch (error) {
//     next(error);
//   }
// });
  
router.post("/", validateEducationData("body"), async (req, res, next) => {
  try {
    console.log("학력 정보 추가하는 중...");

    const { school,major,degree } = req.body;
    const userId= req.user._id;
    const createdPost = await EducationModel.create({ school,major,degree, userId });
    res.status(200).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateEducationData("body"), async (req, res, next) => {
  try {
    console.log("학력 정보 수정하는 중...");

    const { id } = req.params;
    const { school,major,degree }= req.body; 

    const updatedPost = await EducationModel.findOneAndUpdate(
      { _id: id },
      { school,major,degree }, 
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
    console.log("학력 정보 삭제하는 중...");

    const { id } = req.params;
    const deletedPost = await EducationModel.findOneAndDelete({ _id: id }).lean();

    if (!deletedPost) {
      return res.status(404).json({ error: "Award not found" });
    }

    res.status(200).json({ message: "Award deleted successfully",  error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;
  