var CareGiver = require('./app/js/models/CareGiver.js'),
		Patient = require('./app/js/models/Patient.js'),
		mongoose = require('mongoose');

module.exports = function(app, patient) {
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.post('/caregiver', function (req, res) {

		var name = req.body.name;

		var caregiver =  new CareGiver.model({
		  name: name
		});

		caregiver.save(function (err, result) {
		  if (!err){
		    res.send(result);
		  } else {
		    res.status(500).send(JSON.stringify(err));
		  }
		});
	});


	app.get('/caregiver', function(req, res) {
		CareGiver.model.findOne({'name': "Andy"}, {}, function(err, cg){
			if ((! err) && cg !== "null"){
				res.render('caregiver', {
					caregiver: cg
				});
			}
			else {
				console.log(err);
			}
		});
	});

	app.get('/task', function(req, res) {
		res.render('task');
	});

	app.get('/patient/:id', function(req, res) {
		var pid = req.params.id;
		Patient.model.findOne({'_id': pid}, {}, function(err, pat){
			if ((! err) && pat !== "null"){
				res.render('patient', {
					patient: pat // but also need to get current caregiver as logged-in user
				});
			}
			else {
				console.log(err);
			}
		});
	});

	app.get('/patient', function(req, res) {
		if (req.patient){
			res.render('patient', {
				patient: req.patient
			});
		} else {
			//for demo purposes, create patient?

			var id = req.query.id;

			var objId = mongoose.Types.ObjectId(id);

			Patient.model.findOne({_id: objId}, function (err, patient) {

				if (!err) {

					CareGiver.model.find({_id: {$in: patient.caregivers}}, function (err, caregivers) {
						res.render('patient', {
							patient: patient,
							caregivers: caregivers
						});
					});
				}

			});

		}
	});

	//try http://localhost:8888/patients/all?id=55b3d8e7f6f6b6183fdcd54b
	app.get('/patients/all', function (req, res) {
		var id = req.param('id');

		var objId = mongoose.Types.ObjectId(id);

		Patient.model.find({caregivers: objId}, function (err, results) {
			if (!err) {
				res.send(results);
			} else {
				res.status(500).send(err);
			}
		});
	});

}
