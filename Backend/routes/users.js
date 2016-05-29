var express = require('express');
var router = express.Router();
var db = require('./../models/db');
var Calendar = db.Calendar;

/* GET users lists. */
router.get('/', function(req, res, next) {
  var query = Calendar.find();
  //selecting the 'userID' and 'userName' fields.
  query.select('userID userName');
  //execute the query
  query.exec(function(err, users){
    if(err) {
      console.error(err);
      return;
    } else {
      console.log(users);
      res.send(users);
    }
  })
});

module.exports = router;
