const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema= new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title:{
            type:String,
            required:true,
        },
        startDate:{
            type:Date,
            required:true,
        },
        endDate:{
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