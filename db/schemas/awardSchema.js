const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const awardSchema= new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        content:{
            type:String,
            required:true,
        },
        organization:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
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