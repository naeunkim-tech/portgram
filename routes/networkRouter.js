const router = require("express").Router();
const { UserModel } = require("../db/allmodels");

router.get("/", async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 16; 

        const skip = (page - 1) * limit; 

        const users = await UserModel.find({}, { name: 1, email: 1, _id: 1 })
            .skip(skip) 
            .limit(limit) 
            .lean();

        res.json({ users: users, error: null });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
