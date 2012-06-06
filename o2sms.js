#!/usr/bin/env node
;(function () { // wrapper in case we're in module_context mode
  var o2sms = require('./app.js');
  var colors = require('colors');

  o2sms.sms( {
    login: '',
    password: 'vt0lvt0l'
  }, function(err, res){
    if (err){
      console.log(err);
      return;
    }
    console.log(res);
    // do stuff
  });
})()
