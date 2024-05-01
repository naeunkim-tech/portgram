const {model}= require("mongoose")
const projectSchema=require("../schemas/projectSchema")

const ProjectModel = model("Project", projectSchema);

module.exports =  ProjectModel;