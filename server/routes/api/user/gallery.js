const express = require('express');

let Gallery = require('../../../gallery.model');

const router = express.Router()

router.route('/').get(async (erq, res) => {
    try {
        const result = await Gallery.find()
        const output = result.map(({ _id, txt, img }) => ({
            _id,
            txt,
            img
        }))
        // console.log(result)
        res.json({ result: output })
    } catch (error) {
        console.log('Error at getFormsCondition api', error)
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router