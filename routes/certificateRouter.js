const router=require("express").Router();
const {CertificateModel}=require("../db/allmodels")
const {validateCertificationData}=require("../middleware")
  
router.post("/", validateCertificationData("body"), async (req, res, next) => {
  try {
    const { type,date,authority } = req.body;
    console.log({ type,date,authority })
    console.log( CertificateModel);
    const createdPost = await CertificateModel.create({ type,date,authority });

    res.status(201).json({ data: createdPost.toObject(), error: null });
  } catch (error) {
    next(error);
  }
});

  
router.put("/:id",validateCertificationData("body"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type,date,authority }= req.body; 

    const updatedPost = await CertificateModel.findOneAndUpdate(
      { _id: id },
      { type,date,authority }, 
      {
        runValidators: true,
        new: true,
      }
    ).lean();

    res.status(201).json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await CertificateModel.findOneAndDelete({ _id: id }).lean();

    if (!deletedPost ) {
      return res.status(404).json({ error: "Award not found" });
    }

    res.json({ message: "Award deleted successfully",  error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;