const express = require('express');
const fs = require('fs');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const {passport, checkAuth} = require('./lib/auth/auth');



const app = express();
app
    .use(serveStatic(path.join('static')))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use(expressSession({secret: 'qqqq'}))
    .use(passport.initialize())
    .use(passport.session())
    .get('/login', (req, res) => {
        fs.createReadStream('./lib/templates/login.html').pipe(res);
    })
    .get('/', checkAuth, (req, res) => {
        fs.createReadStream('./lib/templates/local.html').pipe(res);
    });

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

app.listen(3000, () => {
    console.log('Listening localhost:3000');
});