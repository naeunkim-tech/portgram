const router=require("express").Router();
const {ProjectModel}=require("../models/allmodels.js")

// router.get("/:userId/edu",async(req,res,next)=>{
//     try{
//         const {userId}= req.params;
//         const posts=await EducationModel.find({userId}).lean();
//         res.json({data:posts, error:null})
//     }catch(error){
//         next(error);
//     }
// })

router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await ProjectModel.findOne({_id: id}).lean();
      res.json({ data: post, error: null });
    } catch (error) {
      next(error);
    }
  });
  
router.post("/", async (req, res, next) => {
    try {
      const { date, title, content } = req.body;
      if (
        title === null ||
        title === undefined ||
        typeof title !== "string" ||
        title === ""
      ) {
        throw new Error("title은 필수이며 문자열이어야 합니다.");
      }
  
      if (
        content === null ||
        content === undefined ||
        typeof content !== "string" ||
        content === ""
      ) {
        throw new Error("content는 필수이며 문자열이어야 합니다.");
      }
  
      const createdPost = await ProjectModel.create({ date, title, content } );
      res.status(201).json({ data: createdPost.toObject(), error: null });
    } catch (error) {
      next(error);
    }
  });
  
router.put("/:id", async (req, res, next) => {
    try {
        const {id}=req.params.id;
        const { date, title, content } = req.body;
        if (
          title === null ||
          title === undefined ||
          typeof title !== "string" ||
          title === ""
        ) {
          throw new Error("title은 필수이며 문자열이어야 합니다.");
        }
    
        if (
          content === null ||
          content === undefined ||
          typeof content !== "string" ||
          content === ""
        ) {
          throw new Error("content는 필수이며 문자열이어야 합니다.");
        }
  
      const updatedPost = await ProjectModel.findOneAndUpdate(
        { _id:id },
        { date, title, content } ,
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
      const {id } = req.params;
      await ProjectModel.findOneAndDelete({_id:id});
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });
  
module.exports = router;