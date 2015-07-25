module.exports = function(app, patient) {
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.get('/task', function(req, res) {
		res.render('task');
	});

	app.get('/patient', function(req, res) {
		if (req.patient){
			res.render('patient', {
				patient: req.patient
			});
		} else {
			//for demo purposes, create patient?

			var andy = new patient.model({
			    name: "Andy",
			    phone: "999-999-9999",
    			sex: "M",
    			gender: "M",
			    // important patient-related info
			    allergies: "none", 
			    notes: "issues",
			    caregivers: [],
			    tasks: []
			});
			andy.save();
			res.render('patient', {
				patient: andy
			});
		}
	});

}