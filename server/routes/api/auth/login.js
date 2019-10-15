const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const app = express()

let User = require('../../../auth.model')


/* PASSPORT SETUP */
app.use(passport.initialize())
app.use(passport.session())

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"))
app.get('/error', (req, res) => res.send("error logging in"))

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
})

passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
        cb(err, user);
    });
})


/* PASSPORT LOCAL AUTHENTICATION */
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if(err) { return done(err) }
            if(!user) { return done(null, false) }
            if(user.password != password) { return done(null, false) }
            return done(null, user)
        })
    }
))

router.route('/').post((req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) { return next(err) }
        if (!user) {
            console.log("LOGIN FAIL!")
            return
            // return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) { return next(err) }
            return
            // return res.redirect('/users/' + user.username)
            console.log("LOGIN DONE!")
        })
    })(req, res, next)
})

module.exports = router
