const { Schema } = require("mongoose");
const certificateSchema= new Schema(
    {
        userId:{
            type: mongoose.Types.ObjectId,
            required:true,
        },
        cerId:{
            type: mongoose.Types.ObjectId,
            required:true,
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
        collection: "Certificate",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=certificateSchema;