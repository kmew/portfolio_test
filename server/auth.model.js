const mongoose = require('mongoose');
const bcrypt = require('bcrypt-node.js')

const Schema = mongoose.Schema;

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

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
             newUser.password = hash
             newUser.save(callback)
        })
    })
}

module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username }
    username.findOne(query, callback)
}

module.exports.getUserById = function(id, callback) {
    username.findById(id, callback)
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, res) {
        if(err) throw err
        callback(null, isMatch)
    })
}

module.exports = mongoose.model('AuthSchema', AuthSchema)
