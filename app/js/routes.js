var CareGiver = require('./models/CareGiver.js'),
db = require('../../db.js');
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

	app.get('/patient', function(req, res) {
		if (req.patient){
			res.render('patient', {
				patient: req.patient
			});
		}
	});



}
