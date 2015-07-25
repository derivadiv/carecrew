var mongoose = require('mongoose');

var caregiverSchema = mongoose.Schema({
    name: String, 
    phone: String,
    email: String,
    notes: String,
    freetime: String,
    patients: [{ // patient model? 
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'Patient'
    }],
    tasks: [{ // task model
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'Task'
    }],
    dateAdded: {type: Date, default: Date.now} //not important yet
});


module.exports = {
	model: mongoose.model('CareGiver', caregiverSchema),
	schema: caregiverSchema
};