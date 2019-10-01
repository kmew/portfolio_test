const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

//edited todo to work
let Work = require('./models/work.model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Work.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
            res.json({result: "OK"});
        }
    });
});

//edited todo to work
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Work.findById(id, function(err, work) {
        res.json(work);
        res.json({result: "OK 2"});
    });
});

//edited todo to work
todoRoutes.route('/update/:id').post(function(req, res) {
    Work.findById(req.params.id, function(err, work) {
        if (!work)
            res.status(404).send("data is not found");
        else
            work.work_imgPath = req.body.work_imgPath;
            work.work_Text = req.body.work_Text;

            work.save().then(work => {
                res.json('Work updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//edited todo to work
todoRoutes.route('/add').post(function(req, res) {
    let work = new Work(req.body);
    work.save()
        .then(work => {
            res.status(200).json({'work': 'work added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/todos', todoRoutes);

//set running port
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});