const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChipSchema = new Schema({
    label: {
        type: String
    },
    icon1: {
        type: String
    },
    // color1: {
    //     type: String
    // },
    // icon2: {
    //     type: String
    // },
    // color2: {
    //     type: String
    // },
})

module.exports = mongoose.model('ChipSchema', ChipSchema)