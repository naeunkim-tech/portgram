const { Router } = require('express');
const path = require("path");
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const { userAuthService } = require('../services/userService');
const UserModel = require("../db/model/userModel.js");

const router = Router();

// User model
const User = require('../db/schemas/userSchema');

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
  res.render('index');
});

// Login Handle
router.post('/login', 
  passport.authenticate('local', {session: false}), // 데이터베이스와 email, password 비교
  (req, res, next) => {
    userAuthService.setUserToken(res, req.user);
    res.redirect('/');
  }
);

// Register Page
router.get('/register', (req, res) => { 
    res.render('register');
});

// Register Handle
router.post('/register', async (req, res) => {
  const { email, password, password2, name } = req.body;
  let errors = [];

  console.log(email, password, password2, name);

  // Check required fields
  // if (!email || !password || !password2 || !name) {
  //   console.log("ddddd");
  //   errors.push({ msg: 'Please fill in all fields' });
  // }

  // // Check passwords match
  // if(password !== password2) {
  //   errors.push({ msg: 'Passwords do not match' });
  // }

  // Check pass length (errors.length:빈칸이 하나라도 있으면 안 넘어감)
  // if(password.length < 6) {
  //   errors.push({ msg: 'Password should be at least 6 characters' });
  // }

  if(errors.length > 0) {
    res.render('register', {
        errors,
        email,
        password,
        password2,
        name
    });
  } else {
    // 데이터베이스에 새로운 사용자 추가
    // const user =  await userAuthService.addUser({ email, password, name });
    // res.redirect('/login');
    UserModel.findOne ({ email: email })
      .then(user => {
        if (user) {
          // User exist
          errors.push({ msg: 'Email is already registered' });
          res.render('register', {
          errors,
          email,
          password,
          password2,
          name
          }); 
        } else {
          const newUser = new UserModel({
              email,
              password,
              name
          });
        
          // Hash Password
          bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              // Set Password to hashed    
              newUser.password = hash;
              // Save user (유저의 정보가 saved 되면 login 페이지로 돌아감)
              newUser
                .save()
                .then(user => {
                    req.flash('success_msg', 'You are now registered and can log in!');
                    res.redirect('/login');
                })
                .catch(err => console.log(err));
          }))
        }
      });
  }
});

// Logout Handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

router.get('/personal', (req, res) => {
console.log("reach personal");
  res.render('personal');
});

router.get('/otheruser', (req, res) => {
  res.render('otheruser.ejs');
});

router.get('/network', (req, res) => {
  res.render('network.ejs');
});

module.exports = router;