const { Schema } = require("mongoose");

const educationSchema= new Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        school:{
            type:String,
            required:true,
        },
        major:{
            type:String,
            required:true,
        },
        degree: {
            type: String,
            enum: ["재학중", "학사졸업", "석사졸업", "박사졸업"],
            required: true,
          },
    },
    {
        collection: "Education",
        versionKey:false,
        timestamps:true,
    }
);

module.exports=educationSchema;