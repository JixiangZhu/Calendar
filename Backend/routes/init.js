var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
var db = require('./../models/db');
var Calendar = db.Calendar;

/* Write some test event to database */
router.post('/', function(req, res, next){
    var calendar = new Calendar({
        userID: '000002',
        userName: 'Jason',
        eventID: '000002',
        eventTitle: 'Group meeting',
        startTime: '2015-11-20 12:00:00',
        endTime: '2015-11-20 14:00:00',
        description: 'This is a test event',
        place: 'cs Building'
    });

    calendar.save();
    res.send('data inited');
});
module.exports = router;