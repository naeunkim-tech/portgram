const mongoose = require("mongoose");
const { User } = require("./user.js");;// .env 환경변수 불러오기
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.MONGODB_URL || "Default MongoDB URL";

const MongoConnect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};


// module.exports = {AwardModel,CertificateModel,EducationModel,ProjectModel,User}
module.exports = {User,MongoConnect}