const express = require('express')

const login = require('./login')
const regist = require('./regist')

const router = express.Router()

router.use('/login', login)
router.use('/regist', regist)

module.exports = router