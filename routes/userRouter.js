const { Router } = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const UserModel = require("../db/model/userModel.js");
const loginRequired = require('../middleware/login-required');

const router = Router();

// Root Page
router.get('/', (req, res) => {
  if (req.user) { // getUserFromJwt: passport authenticate jwt 과정에서 user 정보 받아오기
    res.redirect('/personal');  // user 정보 있으면 로그인 했던 사용자로 판단, '/personal' 경로로 이동
    return;
  }
  res.redirect('/login'); // user 정보 없으면 로그인 하지 않은 사용자로 판단, '/login' 경로로 이동
})

// Login Page
router.get('/login', (req, res) => {
  res.render('index'); // render views_ejs/index.ejs
});

// Login Handle
router.post('/login', 
  passport.authenticate('local', {session: false}), // 데이터베이스와 email, password 비교
  (req, res, next) => {
    try {
      // JWT
      const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
      const token = jwt.sign(req.user.toJSON(), secretKey);
      res
        .cookie('token', token) // 쿠키에 'token'이라는 이름으로 JWT 저장
        .status(200)
        .json(req.user);  // 클라이언트에게 응답 정보 전송, 이 부분이 없으면 /personal 경로로 이동하지 않는 오류 발생
    } catch (error) {
      next(error);
    }
  }
);

// Register Page
router.get('/register', (req, res) => { 
    res.render('register');
});

// Register Handle
router.post('/register', async (req, res) => {
  try {
    const { email, password, password2, name } = req.body;

    // Check Validation
    if( !email || !password ) {
      return res
        .status(400)
        .json({ message: "Please put Email and Password" });
    }

    // Check If User exists in the DB
    const UserDB = await UserModel.findOne({email});
    
    if(UserDB) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the User's Password
    const Salt = 10;
    const hashedPassword = await bcrypt.hash(password, Salt);

    //Save the User to the DB
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      name,
    });

    await newUser.save();
    
    return res
      .status(200)
      .json({ message: "User Registration Success!", newUser});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error creating user" });
  }
});

// Logout Handle
router.get('/logout', (req, res, next) => {
  res.cookie('token', null, { maxAge: 0, });  // 쿠키에서 jwt 삭제, 쿠키 만료 시간: 0
  res.redirect('/');  // '/' 경로로 이동, getUserFromJwt: passport authenticate jwt 과정에서 user 정보를 받아올 수 없으므로 '/login' 경로로 바로 이동
});

// Personal Page
router.get('/personal', loginRequired, (req, res) => {
  res.render('personal'); // render views_ejs/personal.ejs
});

router.get('/otheruser/:userId', (req, res) => {
  res.render('otheruser.ejs');
});

router.get('/networked', (req, res) => {
  res.render('network.ejs');
});

module.exports = router;