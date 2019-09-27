const express = require('express');

let Chip = require('../../../chip.model');

const router = express.Router()



router.route('/').get( async (req, res) => {
    try {
        const result = await Chip.find()
        res.json({ result })
    } catch (error) {
        console.log('Error at getChip api', error)
        return res.status(500).json({ error: error.message })
    }
})


router.route('/:id').get( async (req, res) => {
    try {
        const id = req.params.id
        const result = await Chip.findByID(id)
        res.json({ result })
    } catch(error) {
        console.log('Error at getChipId api', error)
        res.status(500).json({ error: error.message })
    }
})


router.route('/:id').put( async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const result = await Chip.findByIdAndUpdate(id, req.body)
        res.json({ result })
    } catch(error) {
        console.log('Error at updateChip api', error)
        res.status(500).json({ error: error.message })
    }
})


router.route('/').post( async (req, res) => {
    console.log("Adding: ", req.body);
    try {
        const chipping = new Chip(req.body)
        await chipping.save()
        res.status(200).json({'chipping': 'chip added successfully'})
    } catch(error) {
        res.status(400).send('adding new chip failed');
    }
})

module.exports = router