const { Router } = require('express');
const path = require("path");
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const { userAuthService } = require('../services/userService');
const UserModel = require("../db/model/userModel.js");
const loginRequired = require('../middleware/login-required');

const router = Router();

router.get('/', (req, res) => {
  if (req.user) { // getUserFromJwt: passport authenticate jwt 과정에서 user 받아오기
    console.log("user: ", req.user);
    console.log("to personal");
    res.redirect('/personal');
    return;
  }
  console.log("re login");
  res.redirect('/login');
})

// Login Page
router.get('/login', (req, res) => {
	console.log("to login");
  res.render('index'); // render views_ejs/index.ejs
});

// Login Handle
router.post('/login', 
  passport.authenticate('local', {session: false}), // 데이터베이스와 email, password 비교
  (req, res, next) => {
    userAuthService.setUserToken(res, req.user);
    // res.redirect('/');
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
  req.logout(err => {
    if (err) return next(err);
    console.log('logout success');
    res.redirect('/');
  });
  // req.flash('success_msg', 'You are logged out');
});
  
router.get('/personal', loginRequired, (req, res) => {
  console.log("reach personal");
  res.render('personal'); // render views_ejs/personal.ejs
});

router.get('/otheruser/:userId', (req, res) => {
  res.render('otheruser.ejs');
});

router.get('/network', (req, res) => {
  res.render('network.ejs');
});

module.exports = router;