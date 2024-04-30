const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema= new Schema(
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
        content:{
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