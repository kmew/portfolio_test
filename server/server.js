const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const API = require('./routes/api')
const Authen = require('./routes/auth')

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:4000',
    'http://13.58.199.50:3000',
    'http://13.58.199.50:4000',
]
app.use(cors({
    origin: function(origin, callback){
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/api', API)
app.use('/auth', Authen)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
