var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    name: String, 
    phone: String,
    email: String,
    //demographics
    birthday: Date,//convert on frontend to age?
    sex: String,
    gender: String,
    race: String,
    // important patient-related info
    allergies: String, 
    notes: String,
    caregivers: [{ // caregiver model?
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'CareGiver'
    }],
    tasks: [{ // task model
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'Task'
    }],
    dateAdded: {type: Date, default: Date.now} //not important yet
});


module.exports = {
	model: mongoose.model('Patient', patientSchema),
	schema: patientSchema
};