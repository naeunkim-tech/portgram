import express from 'express';

const app = express();

app.use(express.static('views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

export { app };