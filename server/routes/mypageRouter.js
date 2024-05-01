const router = require("express").Router();
const { ObjectId } = require("mongodb");
const {AwardModel,CertificateModel,EducationModel,ProjectModel} = require("../models/allmodels");

router.get("/", async (req, res, next) => {
  try {
    const {uID}=req.user;
    const award = await AwardModel.find({postedBy:ObjectId(uID)}).lean();
    const certificate = await CertificateModel.find({postedBy:ObjectId(uID)}).lean();
    const education = await EducationModel.find({postedBy:ObjectId(uID)}).lean();
    const project = await ProjectModel.find({postedBy:ObjectId(uID)}).lean();
    res.json({ award: award,certificate:certificate,education:education, project:project, error: null });
  } catch (error) {
    next(error);
  }
});



module.exports=router