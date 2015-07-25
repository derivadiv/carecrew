var CareGiver = require('./models/CareGiver.js'),
    db = require('../../db.js');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index.ejs');
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

  app.get('/task', function(req, res) {
    res.render('task.ejs');
  });
};
