const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
	term: String,
	location: String,
	business_name: String,
	wait_time: String,
	arrival_time: String,
	day: String,
	created_at: Date
})

const activityModel = mongoose.model('activity', activitySchema);
module.exports = activityModel