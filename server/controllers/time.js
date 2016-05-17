const Time = require('../models/timeModel');

exports.create = function(req, res) {
	console.log("this is the wait data", req.body);
	var time = new Time({business_id: req.body.id, wait_time: req.body.wait, day: req.body.day, created_at: new Date, arrival_time: req.body.arrival});
	time.save(function(err, result) {
		if (err) {
			console.log(err);
		} else {
			res.send('wait time successfully added');
		}
	})
}