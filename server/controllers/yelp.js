const Yelp = require('yelp');
const config = require('../config');

const yelp = new Yelp({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  token: config.token,
  token_secret: config.token_secret
});

exports.searchYelp = function(req, res, next) {
	yelp.search({term: req.body.term, location: req.body.location}, function(err, data) {
		if (err) {
			return console.log(err);
		} else {
			console.log(data);
			res.send(data);
		}
	})
}