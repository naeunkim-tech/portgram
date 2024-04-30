const router = require("express").Router();
const { ObjectId } = require("mongodb");
const {AwardModel,CertificateModel,EducationModel,ProjectModel} = require("../models/allmodels");

router.get("/:id", async (req, res, next) => {
  try {
    const {id}=req.params;
    const award = await AwardModel.find({postedBy:ObjectId(id)}).lean();
    const certificate = await CertificateModel.find({postedBy:ObjectId(id)}).lean();
    const education = await EducationModel.find({postedBy:ObjectId(id)}).lean();
    const project = await ProjectModel.find({postedBy:ObjectId(id)}).lean();
    res.json({ award: award,certificate:certificate,education:education, project:project, error: null });
  } catch (error) {
    next(error);
  }
});

module.exports=router