const { Schema } = require("mongoose");
const certificateSchema= new Schema(
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
        collection: "Certificate",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=certificateSchema;