//import the mongoose module
const mongoose = require('mongoose')
const sett=require('./helpers/settings')
/*
  mongoose.connect(sett.mongodb);
  const db= mongoose.connection
  
  db.on('error',function(err){
    console.log('mongoose error:'+err);
  });
  db.once('open', function () {
    console.log('mongoose connect successful:');
  });
  */
 mongoose.connect(sett.mongodb, err => console.log(err ? err : 'Mongo connected.'));
  module.exports={mongoose}


