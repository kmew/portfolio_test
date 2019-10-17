const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const app = express()
const bcrypt = require('bcryptjs')

let User = require('../../../auth.model')


/* PASSPORT SETUP */
app.use(passport.initialize())
app.use(passport.session())

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"))
app.get('/error', (req, res) => res.send("error logging in"))

passport.serializeUser((user, cb) => {
    cb(null, user.id);
})

passport.deserializeUser(function(id, cb) {
    User.getUserById(id, (err, user) => {
        done(err, user)
    })
})


/* PASSPORT LOCAL AUTHENTICATION */
passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log('username test: ',username)
        console.log('password test: ',password)
        User.getUserByUsername(username, (err, user) => {
            if(err) throw err
            if(!user){
                return done(null, false, {message: 'Unknow User'})
            }
        })
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err
            if(isMatch){
                return done(null, user)
            } else {
                return done(null, flase, {message: 'Invalid password'})
            }
        })
    }
))

router.route('/').post( async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.findOne({username: username })
    if(user == null) {
        return res.send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(password, user.password)) {
            res.send('Success')
        } else {
            res.send('Password not match')
        }
    } catch {
        res.status(500).send()
    }
})

module.exports = router
