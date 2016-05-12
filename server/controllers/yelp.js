const Yelp = require('yelp');
const config = require('../config');
const Time = require('../models/timeData');

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
			Time.find({}, function(err, result) {
				if (err) {
					console.log('Error cannot find data');
				} else {
					for (var i = 0; i < data.businesses.length; i++) {
						for (var x = 0; x < result.length; x++) {
							if (data.businesses[i].id == result[x].business_id) {
								data.businesses[i].wait_time = result[x].wait_time;
							} 
						}
					}
					res.send(data);
				}
			})
		}
	})
}

