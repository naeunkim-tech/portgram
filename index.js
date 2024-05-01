const { app } = require('./app');

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${PORT}`);
});