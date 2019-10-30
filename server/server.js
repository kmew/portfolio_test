const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const API = require('./routes/api')
const Authen = require('./routes/auth')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/api', API)
app.use('/auth', Authen)
app.use('/api',
    proxy({
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/api/v1"
        }
    })
)
app.use('/auth',
    proxy({
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: {
            "^/auth": "/auth/v1"
        }
    })
)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
