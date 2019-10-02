const express = require('express');

let Chip = require('../../../chip.model');

const router = express.Router()


// read all
router.route('/').get( async (req, res) => {
    console.log("Read all: ", req.body);
    try {
        const result = await Chip.find()
        const output = result.map(({ _id, label }) => ({
            _id,
            label,
        }))
        console.log(result)
        res.json({ result: output })
    } catch (error) {
        console.log('Error at read all Chip api', error)
        return res.json({ error: error.message })
    }
})


// read one
router.route('/:id').get( async (req, res) => {
    console.log("Read one: ", req.body);
    try {
        const id = req.params.id
        const result = await Chip.findByID(id)
        res.json({ result })
    } catch(error) {
        console.log('Error at read one Chip api', error)
        res.json({ error: error.message })
    }
})


// update
router.route('/:id').put( async (req, res) => {
    console.log("Update: ", req.body);
    try {
        const id = req.params.id
        console.log(id);
        const result = await Chip.findByIdAndUpdate(id, req.body)
        res.json({ result })
    } catch(error) {
        console.log('Error at update Chip api', error)
        res.json({ error: error.message })
    }
})


// add
router.route('/').post( async (req, res) => {
    console.log("Add: ", req.body);
    try {
        const chipAdding = new Chip(req.body)
        const result = await chipAdding.save()
        res.json({ result })
    } catch(error) {
        console.log('Error at add Chip api', error)
        res.json({ error: error.message })
    }
})


// delete
router.route('/:id').delete( async (req, res) => {
    console.log("Delete all: ", req.body);
    try{
        const id = req.params.id
        console.log(id);
        const result = await Chip.findByIdAndRemove(id, req.body)
        res.json({ result })
    } catch(error) {
        console.log('Error at delete Chip api', error)
        res.json({ error: error.message })
    }
})

module.exports = router