const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;

const AUTH_TOKENS = [
  'dGVhY2gtY2Fycm90LWh1Yjp0ZXN0',
];

const initBearerStrategy = () => {
  passport.use(new Strategy((token, done) => {
    const existingToken = AUTH_TOKENS.includes(token);
    return done(null, existingToken);
  }))
};

module.exports = initBearerStrategy;
