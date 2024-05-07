const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../db/user');

const config = {
    usernameField: 'email',
};

const local = new LocalStrategy(config, async (email, password, done) => {
    // Match User
    await User.findByEmail({ email })
        .then(user => {
            if(!user) {
                return done(null, false, { message: 'That email is not registered'});
            }

            // Match Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Password incorrect'});
                }
            });
            console.log('db find user ok')
            return done(null, user);
        })
        .catch(err => {
            console.log(err);
            done(err, null);
        });

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
    