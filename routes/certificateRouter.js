const router=require("express").Router();
const {CertificateModel}=require("../models/allmodels.js")

router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await CertificateModel.findOne({_id:id}).lean();
      res.json({ data: post, error: null });
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/", async (req, res, next) => {
    try {
      const { date, title} = req.body;
      if (
        title === null ||
        title === undefined ||
        typeof title !== "string" ||
        title === ""
      ) {
        throw new Error("title은 필수이며 문자열이어야 합니다.");
      }
  
      if (
        date === null ||
        date === undefined ||
        typeof  date !== "string" ||
        date === ""
      ) {
        throw new Error(" date는 필수이며 문자열이어야 합니다.");
      }
  
      const createdPost = await CertificateModel.create({ date, title } );
      res.status(201).json({ data: createdPost.toObject(), error: null });
    } catch (error) {
      next(error);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
        const { date, title} = req.body;
        if (
          title === null ||
          title === undefined ||
          typeof title !== "string" ||
          title === ""
        ) {
          throw new Error("title은 필수이며 문자열이어야 합니다.");
        }
    
        if (
            date === null ||
            date === undefined ||
          typeof date !== "string" ||
          date === ""
        ) {
          throw new Error("date는 필수이며 문자열이어야 합니다.");
        }
  
      const updatedPost = await CertificateModel.findOneAndUpdate(
        {_id:id},
        { date, title } ,
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
      await CertificateModel.findOneAndDelete({_id:id});
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;