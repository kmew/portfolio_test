const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const flash = require('connect-flash')

let User = require('../../../auth.model')

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if(err) throw err
            if(!user) {
                return done(null, false, {message: 'Unknown User'})
            }

            User.comparePassword(password, user.password, function(err, isMatch) {
                if(err) throw err
                if(isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Invalid password' })
                }
            })
        })
    }
))

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user)
    })
})

router.post('/',
    passport.authenticate('local',{successRedirect: '/', failureRedirect: '/', failureFlash: true}),
    function(req, res) {
        res.redirect('/')
})

module.exports = router