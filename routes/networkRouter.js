const router = require("express").Router();

const {UserModel} = require("../db/allmodels");

router.get("/", async (req, res, next) => {
    try {
      const users = await UserModel.find({}, { name: 1, email: 1, _id: 1 }).lean();
      
      res.json({ users: users, error: null });
    } catch (error) {
      next(error);
    }
  });
  



module.exports=router