const mongoose = require('mongoose');

const depSchema = mongoose.Schema({
    id: {
       type:mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model('departments', depSchema);