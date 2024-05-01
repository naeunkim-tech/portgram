const mongoose = require("mongoose");
const { User } = require("./user.js");;// .env 환경변수 불러오기
const dotenv = require("dotenv");

dotenv.config();
// const { User } = require("./models/user.js");

require('dotenv').config(); // .env 환경변수 불러오기
const { MONGODB_URL } = process.env;

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
const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인하세요.";

mongoose.connect(DB_URL, {
  dbName: 'elice_project_01',
});
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다.\n" + DB_URL + "\n" + error)
);

// module.exports = User;