const express = require('express')
const router = express.Router()

let User = require('../../../auth.model')
let Token = require('../../../token.model')

// LOGIN
router.route('/').post( async (req, res) => {
        const { username } = req.body
        const user = await User.findOne({username: username })
        const today = JSON.stringify( new Date() )
        const rawToken = today.concat(user.password)
        // EXPIRE TIME
        const now = new Date()
        const time = now.getTime()
        const expireTime = time + (1000*10) //to 600

        const newToken = new Token({
            password: user.password,
            expiredDate: expireTime,
            token: rawToken
        })

        Token.createToken(newToken, function(err, token) {
            if(err) {
                res.send('Fail')
                throw err
            } else {
                res.send(token.token)
            }
            // console.log(token)
        })
})

module.exports = router
