var Patient = require('./app/js/models/Patient.js').model;
var CareGiver = require('./app/js/models/CareGiver.js').model;
var Task = require('./app/js/models/Task.js').model;

var andy = new CareGiver({
    name: "Andy", 
    phone: "111-111-1111",
    //email blank
    notes: "Can cook",
    freetime: "Weekends",
    patients: [],
    tasks: [],
});

andy.save();

var taskEat = new Task({
	title: "Breakfast", //required, short text
    category: "Eating",
    description: "Cereal from fridge", 
    dateStart: {
    	$hour: 8,
    	$minute: 0
    	//$dayOfWeek: 1-7?
    },
    dateEnd: {
    	$hour: 8,
    	$minute: 30
    	//$dayOfWeek: 1-7?
    },
    notes: "Allergies?",
    caregiver: andy._id
});

taskEat.save();

//and need to update andy's task assignment
CareGiver.update({ _id : andy._id }, {
	"tasks": [taskEat]
},{},function(err, numAffected){
	console.log(err);
	console.log(numAffected);
});

var taskDress = new Task({
	title: "Get changed", //required, short text
    category: "Dressing",
    description: "Change clothes in morning", 
    dateStart: {
    	$hour: 7,
    	$minute: 30
    	//$dayOfWeek: 1-7?
    },
    dateEnd: {
    	$hour: 7,
    	$minute: 45
    	//$dayOfWeek: 1-7?
    },
    notes: "Clothes in dresser" //unassigned
});

var divya = new CareGiver({
    name: "Divya", 
    phone: "555-555-5555",
    email: "divya@me.com",
    notes: "Good with kids",
    freetime: "Weekdays",
    patients: [],
    tasks: [],
});

divya.save();

var simon = new Patient({
    name: "Simon",
    phone: "999-999-9999",
    email: "simon@says.com",
	sex: "M",
	gender: "M",
    // important patient-related info
    allergies: "none", 
    notes: "issues",
    caregivers: [andy, divya],
    tasks: [taskEat, taskDress]
});

simon.save();

//and need to update caregivers andy and divya
CareGiver.update({ _id : andy._id }, {
	"patients": [simon._id]
},{},function(err, numAffected){
	console.log(err);
	console.log(numAffected);
});
CareGiver.update({ _id : divya._id }, {
	"patients": [simon._id]
},{},function(err, numAffected){
	console.log(err);
	console.log(numAffected);
});

