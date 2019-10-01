const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChipSchema = new Schema({
    chip_label: {
        type: String
    },
    chip_icon: {
        type: String
    },
    icon_color: {
        type: String
    },
})

module.exports = mongoose.model('ChipSchema', ChipSchema)