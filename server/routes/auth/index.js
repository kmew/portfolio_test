const express = require('express')

const login = require('./login')
const token = require('./token')

const router = express.Router()

router.use('/login', login)
router.use('/token', token)

module.exports = router