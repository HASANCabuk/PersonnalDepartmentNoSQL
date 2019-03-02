var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var userSchema = mongoose.Schema({
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

userSchema.plugin(timestamps);
module.exports = mongoose.model('users', userSchema);