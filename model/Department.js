const mongoose = require('mongoose');

const Department = mongoose.Schema({
    id: {
       type:mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model('Department', Department);