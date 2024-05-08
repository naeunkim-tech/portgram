const JwtStrategy = require('passport-jwt').Strategy;

const cookieExtractor = (req) => {
  const { token } = req.cookies;
  return token;
};

const opts = {
  secretOrKey : process.env.JWT_SECRET_KEY || "jwt-secret-key",
  jwtFromRequest: cookieExtractor,
}

module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});