const express = require('express')
const router = express.Router()

let Token = require('../../../token.model')

// LOGOUT
router.route('/').post( async (req, res) => {
    try {
        const {token} = req.body
        const result = await Token.findOneAndRemove(token, req.body)
        res.send(result)
    } catch(error) {
        console.log('Error clear token in collection: ', error)
        res.json({ error: error.message })
    }
})

module.exports = router
