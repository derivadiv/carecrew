module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.ejs');
	});
	
	app.get('/task', function(req, res) {
		res.render('task.ejs');
	});
}