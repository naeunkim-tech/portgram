const mongoose = require("mongoose");
// const { User } = require("./models/user.js");

require('dotenv').config(); // .env 환경변수 불러오기
const { MONGODB_URL } = process.env;

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

////////

const { app } = require('./app');

require('dotenv').config(); // .env 환경변수 불러오기

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${PORT}`);
});


const {MongoConnect} = require("./db");

// Call the MongoDB connection setup
MongoConnect();
