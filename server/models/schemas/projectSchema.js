const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema= new Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title:{
            type:String,
            required:true,
        },
        startdate:{
            type:Date,
            required:true,
        },
        enddate:{
            type:Date,
            required:true,
        },
        role:{
            type:String,
            required:true,
        },
    },
    {
        collection: "Project",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=projectSchema;