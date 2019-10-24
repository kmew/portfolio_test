const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

let TokenSchema = new Schema({
    password: {
        type: String
    },
    expiredDate: {
        type: Date
    },
    token: {
        type: String
    },
})

const Token = module.exports = mongoose.model('Token', TokenSchema)

module.exports.createToken = function(newToken, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newToken.token, salt, function(err, hash) {
            newToken.token = hash
            newToken.save(callback)
        })
    })
}
