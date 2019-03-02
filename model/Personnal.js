var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var personSchema = mongoose.Schema({
    id: {
       type: mongoose.Types.ObjectId
    },
    department:
    {
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    isMarried: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        enum: ["Erkek", "Kadın", "Diğer"]
    },
    salary:{
        type:Number,
        required:true
    }
    
   
});

personSchema.plugin(timestamps);
module.exports = mongoose.model('personnals', personSchema);