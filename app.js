const express = require('express');
const { educationRouter, certificateRouter, awardRouter, projectRouter, postRouter, userRouter, mypageRouter, networkRouter } = require("./routes");
const { userAuthService } = require('./services/userService');

const app = express();

app.use(express.static('views'));
app.use(express.static('public'));

app.use(express.json());

app.use('/user', userRouter);
app.use("/posts", postRouter);

app.use("/mypage", mypageRouter);
app.use("/mypage/education", educationRouter);
app.use("/mypage/certification", certificateRouter);
app.use("/mypage/award", awardRouter);
app.use("/mypage/project", projectRouter);

app.use('/network', networkRouter)


// application middleware
// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.statusCode = 404;
//   next(error);
// });

// root page
app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

// login
app.post('/', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userAuthService.getUser({ email, password });

        if (user.errorMessage) {
          throw new Error(user.errorMessage);
        }

        // mongoDB find test
        console.log('회원가입 된 사용자입니다.', user);

        // 로그인 성공 후 redirect 할 경로 필요
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
});

// error handling middleware
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

exports.app = app;