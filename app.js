import express from 'express';
import userRouter from './routes/user.js'

const app = express();

app.use(express.static('views'));
app.use(express.static('public'));
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

export { app };