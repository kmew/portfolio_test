const express = require('express')
const router = express.Router()

let auth = require('../../../auth.model');

module.exports = function (passport) {
    router.post('/signup', function (req, res) {
        const body = req.body,
            email = body.email,
            password = body.password;
        auth.findOne({email:email}, function(err,doc){
            if(err) {res.status(500).send('error occured')}
            else {
                if(doc) {
                    res.status(500).send('Email already exists')
                }
                else {
                    const record = new auth()
                    record.email = email
                    record.password = record.hashPassword(password)
                    record.save( function(err,user) {
                        if(err) {
                            res.status(500).send('db error')
                        } else {
                            res.send(user)
                        }
                    })
                }
            }
        })
    })
    return router
}