const { model }  = require("mongoose");

const educationSchema = require("../schemas/educationSchema");

const EducationModel = model("Education", educationSchema);

module.exports =  EducationModel;