const express = require('express');

let Chip = require('../../../chip.model');

const router = express.Router()

router.route('/').get( async (erq, res) => {
    try {
        const result = await Chip.find()
        const output = result.map(({ _id, label, icon1 }) => ({
            _id,
            label,
            icon1,
        }))
        console.log(result)
        res.json({ result: output })
    } catch (error) {
        console.log('Error at getChip api', error)
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router