const router = require("express").Router();
const { ObjectId } = require("mongodb");
const {AwardModel,CertificateModel,EducationModel,ProjectModel} = require("../db/allmodels");

router.get("/:pID", async (req, res, next) => {
  try {
    const {pID}=req.params;
    const award = await AwardModel.find({postedBy:ObjectId(pID)}).lean();
    const certificate = await CertificateModel.find({postedBy:ObjectId(pID)}).lean();
    const education = await EducationModel.find({postedBy:ObjectId(pID)}).lean();
    const project = await ProjectModel.find({postedBy:ObjectId(pID)}).lean();
    res.json({ award: award,certificate:certificate,education:education, project:project, error: null });
  } catch (error) {
    next(error);
  }
});

module.exports=router