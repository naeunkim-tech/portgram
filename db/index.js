const mongoose = require("mongoose");
const dotenv = require("dotenv");

require('dotenv').config(); // .env 환경변수 불러오기
const { MONGODB_URL } = process.env;

const DB_URL = MONGODB_URL || "Default MongoDB URL";

const MongoConnect = async () => {
  try {
    await mongoose.connect(DB_URL); // mongoDB 특정 데이터베이스에 연결하려면 옵션 추가, option: { dbName: __ }
    // mongoose.connect(DB_URL, {
    //   dbName: 'elice_project_01',
    // });
    console.log('MongoDB Connected...', DB_URL);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// module.exports = {AwardModel,CertificateModel,EducationModel,ProjectModel,User}
module.exports = { MongoConnect }