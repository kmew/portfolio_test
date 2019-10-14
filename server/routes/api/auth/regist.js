const express = require('express')
const router = express.Router()
const flash = require('connect-flash')

let User = require('../../../auth.model')

router.post('/', function(req, res) {
    const username = req.body.username
    const password = req.body.password

    req.checkBody('username', 'Username is required').notEmpty()
    req.checkBody('password', 'Password is required').notEmpty()

    const errors = req.validationErrors()

    if(errors) {
        console.log('ERROR: ', errors)
    } else {
        console.log('PASS')
        const newUser = new User({
            username: username,
            password: password
        })

        User.createUser(newUser, function(err, user) {
            if(err) throw err
            console.log(user)
        })

        req.flash('success_msg', 'You are registered and can now login')
    }
})

module.exports = router