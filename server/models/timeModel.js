const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
	business_id: String,
	wait_time: String,
	day: String,
	created_at: Date,
	arrival_time: String
})

const TimeModel = mongoose.model('time', timeSchema);
module.exports = TimeModel
