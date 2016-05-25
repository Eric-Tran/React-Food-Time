const Authentication = require('./controllers/authentication');
const Yelp = require('./controllers/yelp');
const Time = require('./controllers/time');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

	//Mongo API
	app.get('/', requireAuth, function(req, res) {
		res.send({ message: 'Super secret code is ABC123' });
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);

	//YELP API
	app.post('/yelp', Yelp.searchYelp);


	//Wait Data
	app.post('/data', function(req, res) {
		Time.create(req, res);
	});

	//Recent Activity
	app.get('/activity', function(req, res) {
		Time.show(req, res);
	});

}