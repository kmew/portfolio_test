const express = require('express');

let Gallery = require('../../../gallery.model');

const router = express.Router()

//Set router get function (Get)
router.route('/').get( async (erq, res) => {
    try {
        const result = await Gallery.find()
        res.json({ result })
    } catch (error) {
        console.log('Error at getFormsCondition api', error)
        return res.status(500).json({ error: error.message })
    }
})

//Set API(post) to edit
router.route().post('/', (req, res) => {
    // books.push(req.body)
    res.status(201).json(req.body)
  })

//

//
router.route('/:id').get((erq, res) => {
})

module.exports = router
