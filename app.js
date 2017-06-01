const express = require('express');
const process = require('process');
const fs = require('fs');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const {passport, checkAuth} = require('./lib/auth/auth');
const local = require('./lib/templates/local');
const fake = require('./lib/fake');



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

    .get('/api/1.0.0/users', (req, res) => {
        res.send(fake({count: req.query.perPage || 20, type:'user'}));
    })

    .get('/api/1.0.0/users:1', (req, res) => {
        res.send(fake({count:1, type:'user'}));
    })

    .get('/login', (req, res) => {
        fs.createReadStream('./lib/templates/login.html').pipe(res);
    })

    .get('/', checkAuth, (req, res) => {
        res.send(local);
    });

app
    .post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

app
    .listen(3000, () => {
    console.log('Listening localhost:3000');
});