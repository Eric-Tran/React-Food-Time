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
					var dayOfWeek = {
						0: "Sunday",
						1: "Monday",
						2: "Tuesday",
						3: "Wednesday",
						4: "Thursday",
						5: "Friday",
						6: "Saturday"
					}
					var date = new Date();
					var day = date.getDay();
					var hour = date.getHours()
					var num = 1;
					for (var i = 0; i < data.businesses.length; i++) {
						data.businesses[i].est_wait = "not available";
						data.businesses[i].wait_data = [];
						data.businesses[i].key = num++;
						for (var x = 0; x < result.length; x++) {
							if (data.businesses[i].id == result[x].business_id) {
								if (result[x].day == dayOfWeek[day] && result[x].arrival_time == hour) {
									console.log("got in here", hour, result[x].arrival_time, result[x].day, dayOfWeek[day]);
									var estWait = result[x].wait_time;
									data.businesses[i].est_wait = estWait;
								}
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

