const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GallerySchema = new Schema({
    img_text: {
        type: String
    },
    img_src: {
        type: String
    },
})

module.exports = mongoose.model('GallerySchema', GallerySchema);