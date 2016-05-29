/* Create, Delete, Update, Query operations */
var express = require('express');
var router = express.Router();
var db = require('./../models/db');
var Calendar = db.Calendar;


/* Create event */
router.post('/', function(req, res, next) {
    console.log(req.body);
    var calendar = new Calendar(req.body);
    calendar.save(function(err){
        if(err){
            console.log("Create new event failed");
            return;
        }
        console.log('meow');
    });
    res.send('calendar updated');
    calendar.save();
});

/* delete by eventID*/
router.delete('/', function(req, res, next){
    console.log(req.query.eventID);
    Calendar.remove({
        eventID: req.query.eventID
    }, function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log('Delete succeed');
    });
    console.log(req.body);
    res.send('Delete eventID: ' + req.query.id + ' succeed!');
});

/*update by eventID */
router.put('/', function(req, res, next){
    //Calendar.update(conditions, update, options, callback);
    var conditions = {eventID: req.body.eventID};

    var update = {$set : {
        userID: req.body.userID,
        userName: req.body.userName,
        eventTitle: req.body.eventTitle,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        description: req.body.description,
        place: req.body.place
    }};
    var options = {upsert: true};
    Calendar.update(conditions,update, options, function(err){
        if(err){
            console.error(err);
        } else {
            console.log('Update succeed!');
            res.send('Update succeed!');
        }
    })
});


/* query with eventID based on static method */
router.get('/', function(req, res, next){
    Calendar.find({eventID: req.query.eventID}, function(err, docs){
        if(err){
            console.error(err);
            return;
        }
        console.log(docs);
        res.send(docs);
    })
});
module.exports = router;

