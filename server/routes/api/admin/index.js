const express = require('express')

const gallery = require('./gallery')
const chip = require('./chip')

const router = express.Router()

router.use('/gallery', gallery)
router.use('/chip', chip)

module.exports = router