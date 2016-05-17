const Yelp = require('yelp');
const config = require('../config');
const Time = require('../models/timeModel');

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
						data.businesses[i].wait_data = [];
						for (var x = 0; x < result.length; x++) {
							if (data.businesses[i].id == result[x].business_id) {
								var obj = {
									wait: result[x].wait_time,
									arrival: result[x].arrival_time,
									day: result[x].day
								}
								data.businesses[i].wait_data.push(obj);
							} 
						}
					}
					res.send(data);
				}
			})
		}
	})
}

