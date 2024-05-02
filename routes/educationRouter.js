const router=require("express").Router();
const {EducationModel}=require("../db/allmodels")
const {validateEducationData}=require("../middleware")
  
router.post("/",validateEducationData("body"), async (req, res, next) => {
  try {
    const { school,major,degree } = req.body;
    console.log({ school,major,degree })
    console.log( EducationModel);
    const createdPost = await EducationModel.create({ school,major,degree });
    res.status(201).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateEducationData("body"), async (req, res, next) => {
  try {
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

    res.json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;
  