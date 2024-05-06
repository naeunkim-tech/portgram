const mongoose = require("mongoose");
const certificateSchema= new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        type:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
        },
        authority:{
            type:String,
            required:true,
        },
    },
    {
        collection: "Certificate",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=certificateSchema;