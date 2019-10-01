const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let work = new Schema({
    work_imgPath: {
        type: String
    },
    work_Text: {
        type: String
    },
    // todo_priority: {
    //     type: String
    // },
    // todo_completed: {
    //     type: Boolean
    // }
});
module.exports = mongoose.model('work', work);