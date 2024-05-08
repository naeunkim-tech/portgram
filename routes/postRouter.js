const router = require("express").Router();
const { ObjectId } = require("mongodb");
const { AwardModel, CertificateModel, EducationModel, ProjectModel } = require("../db/allmodels");

router.get("/:userId", async (req, res, next) => {
  try {
    console.log("다른 유저 포트폴리오 가져오는 중...");

    const { userId } = req.params;
    console.log(userId)

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId" });
    }

    const award = await AwardModel.find( { "userId":new ObjectId(userId) }).lean();
    const certificate = await CertificateModel.find({ "userId":new ObjectId(userId) }).lean();
    const education = await EducationModel.find({ "userId": new ObjectId(userId) }).lean();
    const project = await ProjectModel.find({ "userId": new ObjectId(userId) }).lean();

    res.json({ award, certificate, education, project, error: null });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
