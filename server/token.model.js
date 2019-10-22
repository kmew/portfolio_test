const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TokenSchema = new Schema({
    username: {
        type: String
    },
    token: {
        type: String
    },
})

module.exports = mongoose.model('TokenSchema', TokenSchema)