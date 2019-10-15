const express = require('express')
const app = express()

const admin = require('./admin')
const user = require('./user')
const auth = require('./auth')

const router = express.Router()

router.use('/admin', admin)
router.use('/user', user)
router.use('/auth', auth)

module.exports = router