const { app } = require('./app');

require('dotenv').config(); // .env 환경변수 불러오기
const { SERVER_PORT } = process.env;

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${PORT}`);
});