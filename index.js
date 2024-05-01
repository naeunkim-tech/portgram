// mongoDB connect //

const mongoose = require("mongoose");
const { MongoConnect } = require("./db");

MongoConnect(); // Call the MongoDB connection setup


// server connect //

const { app } = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${PORT}`);
});
