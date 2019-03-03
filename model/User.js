var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var User = mongoose.Schema({
    id: {
        type:mongoose.Types.ObjectId,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    }
   
});

User.plugin(timestamps);
module.exports = mongoose.model('User', User);