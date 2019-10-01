const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GallerySchema = new Schema({
    txt: {
        type: String
    },
    img: {
        type: String
    },
})

module.exports = mongoose.model('GallerySchema', GallerySchema);