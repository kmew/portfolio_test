const express = require('express');

let Chip = require('../../../chip.model');

const router = express.Router()

router.route('/').get( async (erq, res) => {
    try {
        const result = await Chip.find()
        res.json({ result })
    } catch (error) {
        console.log('Error at getChip api', error)
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router