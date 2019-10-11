const mongoose = require('mongoose');
const bcrypt = require('bcrypt-node.js')

const Schema = mongoose.Schema;

let AuthSchema = new Schema({
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
})

AuthSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

AuthSchema.methods.comaprePassword = function (password,hash) {
    return bcrypt.comapreSync(password,hash)
}

module.exports = mongoose.model('AuthSchema', AuthSchema)
