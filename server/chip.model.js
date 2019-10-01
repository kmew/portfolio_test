const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChipSchema = new Schema({
    label: {
        type: String
    },
    // icon: {
    //     type: String
    // },
    // color: {
    //     type: String
    // },
})

module.exports = mongoose.model('ChipSchema', ChipSchema)