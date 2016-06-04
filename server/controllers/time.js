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
	Activity.find({}).sort({created_at: -1}).limit(10).exec(function(err, results) {
		if (err) {
			console.log(err);
		} else {
			for (var x = 0; x < results.length; x++) {
				if (results[x].arrival_time) {
					var timeConv = {1: "1 AM", 2: "2 AM", 3: "3 AM", 4: "4 AM", 5: "5 AM", 6: "6 AM", 
						7: "7 AM", 8: "8 AM", 9: "9 AM", 10: "10 AM", 11: "11 AM", 12: "12 PM", 13: "1 PM", 
						14: "2 PM", 15: "3 PM", 16: "4 PM", 17: "5 PM", 18: "6 PM", 19: "7 PM", 20: "8 PM", 
						21: "9 PM", 22: "10 PM", 23: "11 PM", 0: "12 AM"};

						results[x].arrival_time = timeConv[results[x].arrival_time];
				}
			}
			res.send(results);
		}
	})
}