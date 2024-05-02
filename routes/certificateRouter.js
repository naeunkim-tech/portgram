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

    res.json({ data: updatedPost, error: null });
  } catch (error) {
    next(error);
  }
});

  
  
  module.exports = router;