
var express = require('express');
var router = express.Router();
var db = require('./../models/db');
var Calendar = db.Calendar;

router.get('/',function(req,res, next){
    var query = Calendar.find({startTime: req.query.date, endTime: req.query.date});
    //selecting the 'userID' and 'userName' fields.
    //query.select('eventID eventTitle startTime endTime description userID');
    //execute the query
    query.exec(function(err, events){
        if(err) {
            console.error(err);
            return;
        } else {
            console.log(events);
            res.send(events);
        }
    })
});

module.exports = router;