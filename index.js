const { app } = require('./app');

require('dotenv').config(); // .env 환경변수 불러오기

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${PORT}`);
});


const {MongoConnect} = require("./db");

// Call the MongoDB connection setup
MongoConnect();
