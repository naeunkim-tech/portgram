const express = require('express');
const userRouter = require('./server/routes/user.js');
const {postRouter, mypageRouter, mypageEditRouter} =require( "./server/routes/index.js");

const app = express();

app.use(express.static('views'));
app.use(express.static('public'));
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

app.use(express.json());

app.use("/posts", postRouter);

app.use("/mypage", mypageRouter)
app.use("/mypage/edit", mypageEditRouter)


app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.error(error);
  const statusCode = error.statusCode ?? 500;
  let message = error.message;
  if (statusCode === 500) {
    message = "Internal Server Error";
  }
  res.status(statusCode).json({
    data: null,
    error: message,
  });
});


module.exports = { app };