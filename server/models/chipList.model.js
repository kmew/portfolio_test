const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let chipList = new Schema({
    chipList_Name: {
        type: String
    },
    chipList_Text: {
        type: String
    },
    chipList_Color: {
        type: String
    },
    // todo_completed: {
    //     type: Boolean
    // }
});
module.exports = mongoose.model('chipList', chipList);