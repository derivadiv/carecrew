var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    title: String, //required, short text
    category: String,
    description: String, 
    dateAdded: {type: Date, default: Date.now},
    dateStart: {type: Date, default: Date.now},
    dateEnd: Date, // TODO replace with duration but what data type/ units?
    notes: String,
    status: String, // ['uassigned', 'inprogress', 'completed']
    caregiver: { // caregiver must sign up to be assigned to a task
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'CareGiver'
    }
});


module.exports = {
	model: mongoose.model('Task', taskSchema),
	schema: taskSchema
};