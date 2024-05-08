const router = require("express").Router();
// const { ObjectId } = require("mongodb");
const {AwardModel,CertificateModel,EducationModel,ProjectModel} = require("../db/allmodels");
const {validateToken} = require("../middleware/validateToken");


router.get("/",validateToken, async (req, res, next) => {
  try {
    console.log("마이페이지 정보 가져오는 중...")

    const userId=req.user._id;

    const award = await AwardModel.find( { "userId": userId }).lean();
    const certificate = await CertificateModel.find({ "userId": userId }).lean();
    const education = await EducationModel.find({ "userId": userId }).lean();
    const project = await ProjectModel.find({ "userId": userId }).lean();

    res.json({ award: award,certificate:certificate,education:education, project:project, error: null });
  } catch (error) {
    next(error);
  }
});



module.exports=router