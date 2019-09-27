const express = require('express');

let Gallery = require('../../../gallery.model');

const router = express.Router()

router.route('/').get( async (erq, res) => {
    try {
        const result = await Gallery.find()
        res.json({ result })
    } catch (error) {
        console.log('Error at getFormsCondition api', error)
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router