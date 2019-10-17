const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')

let User = require('../../../auth.model')

// router.use(expressValidator)

router.route('/').post( async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(req.body)

    const newUser = new User({
        username: username,
        password: password
    })

    User.createUser(newUser, function(err, user) {
        if(err) {
            res.send('Fail')
            throw err
        } else {
            res.send('Success')
        }
        console.log(user)
    })

    // req.flash('success_msg', 'You are registered and can now login')
})

module.exports = router