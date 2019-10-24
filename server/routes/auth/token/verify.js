const express = require('express')
const router = express.Router()

let User = require('../../../auth.model')
let Token = require('../../../token.model')

// Auth
router.route('/').post( async (req, res) => {
    const { token } = req.body
    const now = new Date()
    const time = now.getTime()

    // Check old token
    try{
        await Token.findOneAndDelete({expiredDate: {$lt :now}}, (err, oldToken) => {
            if(oldToken!==null){
                res.send("token found -> expired")
            } else {
                res.send("no token -> no expired")
            }
        })
    } catch(err) {
        res.send(err)
    }
})

module.exports = router
