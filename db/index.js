const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config(); // .env 환경변수 불러오기
const { MONGODB_URI } = process.env;

const DB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5"

const MongoConnect = async () => {
  try {
    // await mongoose.connect(DB_URL); // mongoDB 특정 데이터베이스에 연결하려면 옵션 추가, option: { dbName: __ }
    mongoose.connect(DB_URI, {
      dbName: 'elice_project_01',
    });
    console.log('MongoDB Connected...', DB_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = { MongoConnect }