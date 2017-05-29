const passport = require('passport');
//passport configuration
const LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function (id, done) {
    done(null, JSON.parse(id));
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        if (username === 'u', password === 'p') {
            done(null, {user: 'Vasya', age: 42});
        }
        else {
            done(null, false, {message: 'Incorrect password.'});
        }
    }
));

const checkAuth = (req, res, next) => {
    if (req.user) return next();
    else res.redirect('/login');
};

module.exports = {passport, checkAuth};