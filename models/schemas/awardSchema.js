const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const awardSchema= new Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        date:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
    },
    {
        collection: "Award",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=awardSchema;