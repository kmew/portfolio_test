const express = require('express')

const login = require('./login')
const register = require('./regist')

const router = express.Router()

router.use('/login', login)
router.use('/regist', register)

module.exports = router