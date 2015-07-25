var CareGiver = require('./models/CareGiver.js'),
    db = require('../../db.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  app.post('/caregiver', function (req, res) {

    var lastName = req.body.lastName,
        firstName = req.body.firstName;

    var caregiver =  new CareGiver(firstName, lastName);

    db.instance.collection('caregiver').insert(
      caregiver,
      function (err, result) {
        if (!err){
          res.send(result);
        } else {
          res.status(500).send(JSON.stringify(err));
        }
      }
    );
  });
}
