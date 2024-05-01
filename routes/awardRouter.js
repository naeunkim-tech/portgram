const router=require("express").Router();
const {AwardModel}=require("../db/allmodels.js")

  
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
  
      const createdPost = await ProjectModel.create({ date, title } );
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
  
      const updatedPost = await ProjectModel.findOneAndUpdate(
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
  
  
  module.exports = router;