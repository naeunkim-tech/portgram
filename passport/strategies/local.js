const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../../db/model/userModel');
const bcrypt = require('bcrypt');

const config = {
    usernameField: 'email',
    passwordField: 'password',
};

const local = new LocalStrategy(config, async (email, password, done) => {
    try {
        // Match User
        const user = await UserModel.findOne({ email });
        if(!user) {
            done(null, false, { message: 'That email is not registered'});
            return;
        }
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if(!isMatch) {
                done(null, false, {message: 'Password incorrect'});
                return;
            }
            done(null, user);   // login 라우터의 passport 미들웨어에 사용자 인증 성공했음을 전달
            return user;    // login 라우터에 user 정보 전달, 라우터에서 해당 정보 이용하여 jwt 생성하도록 하기 위함 (라우터가 받는 user 정보: req.user)
        });
        // return done(null, user); // 원래 여기서 다시 호출되는 done(null, user)가 login 라우터에 user 정보를 전달했으나, 해당 역할을 bcrypt.compare 함수 내 콜백 함수의 return user 부분이 수행하도록 수정
    } catch(error) {
        done(error, null);
    }
});

module.exports = local;