var mongoose = require('mongoose');
var taskSchema = require('./Task.js').schema;
var caregiverSchema = require('./CareGiver.js').schema;

var patientSchema = mongoose.Schema({
    name: String, 
    phone: String,
    //demographics
    birthday: Date,//convert on frontend to age?
    sex: String,
    gender: String,
    race: String,
    // important patient-related info
    allergies: String, 
    notes: String,
    // how to link different schemas between these models, TODO
    caregivers: [caregiverSchema],
    tasks: [taskSchema],
    dateAdded: {type: Date, default: Date.now} //not important yet
});


module.exports = {
	model: mongoose.model('Patient', patientSchema),
	schema: patientSchema
};