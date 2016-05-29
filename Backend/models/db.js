/**
 * This model handle with mongodb
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/calendar'); //connected to localhost, use --dbpath to specify the dir of database before use it

/* define the structure of calendar database */
var calendarSchema = new Schema({
    userID: {type: String},
    userName: {type: String},
    eventID: {type: String},
    eventTitle:{ type: String},
    startTime: {type: Date},
    endTime: {type: Date},
    description: {type: String},
    place: {type: String}
});

exports.Calendar = mongoose.model('Calendar', calendarSchema);