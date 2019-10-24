const express = require('express')

const add = require('./add')
const Delete = require('./delete')
const verify = require('./verify')

const router = express.Router()

router.use('/add', add)
router.use('/delete', Delete)
router.use('/verify', verify)
// const verify = require('./verify')

module.exports = router