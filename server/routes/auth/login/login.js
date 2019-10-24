const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

let User = require('../../../auth.model')

router.route('/').post( async (req, res) => {
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
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
