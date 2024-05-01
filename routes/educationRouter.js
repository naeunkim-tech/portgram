const router=require("express").Router();
const {EducationModel}=require("../db/allmodels.js")


router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await EducationModel.find({_id:id}).lean();
      res.json({ data: post, error: null });
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/", async (req, res, next) => {
    try {
      const { school, major, degree } = req.body;
      if (
        school === null ||
        school === undefined ||
        typeof school !== "string" ||
        school === ""
      ) {
        throw new Error("school은 필수이며 문자열이어야 합니다.");
      }
  
      if (
        major === null ||
        major === undefined ||
        typeof major !== "string" ||
        major === ""
      ) {
        throw new Error("major는 필수이며 문자열이어야 합니다.");
      }
  
      const createdPost = await EducationModel.create({ school, major, degree });
      res.status(201).json({ data: createdPost.toObject(), error: null });
    } catch (error) {
      next(error);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      const { eduId } = req.params;
      const { school, major, degree } = req.body;
      if (
        school === null ||
        school === undefined ||
        typeof school !== "string" ||
        school === ""
      ) {
        throw new Error("school은 필수이며 문자열이어야 합니다.");
      }
  
      if (
        major === null ||
        major === undefined ||
        typeof major !== "string" ||
        major === ""
      ) {
        throw new Error("major는 필수이며 문자열이어야 합니다.");
      }
  
      const updatedPost = await EducationModel.findOneAndUpdate(
        {eduId},
        { school, major, degree },
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
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await EducationModel.findOneAndDelete({_id:id});
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;
  