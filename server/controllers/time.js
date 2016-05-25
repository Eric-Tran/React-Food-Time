const Time = require('../models/timeModel');
const Activity = require('../models/activityModel');

exports.create = function(req, res) {
	console.log("this is the wait data", req.body);
	var activities = new Activity({business_name: req.body.name, wait_time: req.body.wait, day: req.body.day, created_at: new Date, arrival_time: req.body.arrival});
	activities.save(function(err) {
		if(err) {
			console.log(err);
		}
	})
	var time = new Time({business_id: req.body.id, wait_time: req.body.wait, day: req.body.day, created_at: new Date, arrival_time: req.body.arrival});
	time.save(function(err, result) {
		if (err) {
			console.log(err);
		} else {
			res.send('wait time successfully added');
		}
	})
}

exports.show = function(req, res) {
	Activity.find({}, null, {sort: {created_at: -1}}, function(err, results) {
		if (err) {
			console.log(err);
		} else {
			res.send(results);
		}
	})
}