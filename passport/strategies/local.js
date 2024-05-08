const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../db/user');

const config = {
    usernameField: 'email',
    passwordField: 'password',
};

const local = new LocalStrategy(config, async (email, password, done) => {
    try {
        // Match User
        const user = await User.findByEmail({ email });
        if(!user) {
            return done(null, false, { message: 'That email is not registered'});
        }
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                done(null, user);   // passport에게 사용자 인증 성공했음을 전달
                console.log('isMatch done ok');
                console.log('return user to login route post');
                return user;    // login 라우터에 user 정보 전달, 라우터에서 해당 정보 이용하여 jwt 생성하도록 하기 위함 (라우터는 req.user로 받음)
            } else {
                done(null, false, {message: 'Password incorrect'});
            }
        });
        // return done(null, user); // 원래 여기서 다시 호출되는 done(null, user)가 login 라우터에 user 정보를 전달했으나, 해당 역할을 bcrypt.compare 함수 내 콜백 함수의 return user 부분이 수행하도록 수정
    } catch(err) {
        console.log(err);
        done(err, null);
    }

        //session 로그인 비활성화, session 사용 대신 jwt + cookie 사용
        // passport.serializeUser((user, done) => {
        //     done(null, user.id);
        // });
        // passport.deserializeUser((id, done) => {
        //     User.findById(id, (err, user) => {
        //         done(err, user);
        //     });
        // });
});

module.exports = local;
    