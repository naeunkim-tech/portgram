const {model}= require("mongoose")
const certificateSchema=require("../schemas/certificateSchema")

const CertificateModel = model("Certificate", certificateSchema);

module.exports =  CertificateModel;