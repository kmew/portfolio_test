const express = require('express');

let Gallery = require('../../../gallery.model');

const router = express.Router()


// read all
router.route('/').get( async (req, res) => {
    console.log("Read all: ", req.body);
    try {
        const result = await Gallery.find()
        res.json({ result })
    } catch (error) {
        console.log('Error at read all Gallery api', error)
        return res.json({ error: error.message })
    }
})


// read one
router.route('/:id').get( async (req, res) => {
    console.log("Read one: ", req.body);
    try {
        const id = req.params.id
        const result = await Gallery.findByID(id)
        res.json({ result })
    } catch(error) {
        console.log('Error at read one Gallery api', error)
        res.json({ error: error.message })
    }
})


// update
router.route('/:id').put( async (req, res) => {
    console.log("Update: ", req.body);
    try {
        const id = req.params.id
        console.log(id);
        const result = await Gallery.findByIdAndUpdate(id, req.body)
        res.json({ result })
    } catch(error) {
        console.log('Error at update Gallery api', error)
        res.json({ error: error.message })
    }
})


// add
router.route('/').post( async (req, res) => {
    console.log("Add: ", req.body);
    try {
        const galleryAdding = new Gallery(req.body)
        await galleryAdding.save()
        res.json({ result })
    } catch(error) {
        console.log('Error at add Gallery api', error)
        res.json({ error: error.message })
    }
})


// delete
router.route('/:id').delete( async (req, res) => {
    console.log("Delete all: ", req.body);
    try{
        const id = req.params.id
        console.log(id);
        const result = await Gallery.findByIdAndRemove(id, req.body)
        res.json({ result })
    } catch(error) {
        console.log('Error at delete Gallery api', error)
        res.json({ error: error.message })
    }
})

module.exports = router