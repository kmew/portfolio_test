const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

let AuthSchema = new Schema({
    username: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
})

const User = module.exports = mongoose.model('User', AuthSchema)

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash
            newUser.save(callback)
        })
    })
}
