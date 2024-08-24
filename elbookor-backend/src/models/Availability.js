const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  day: { type: String, required: true }, // e.g., 'Monday'
  startTime: { type: String, required: true }, // e.g., '09:00'
  endTime: { type: String, required: true }, // e.g., '17:00'
  isOff: { type: Boolean, default: false }, // Is this day a day off?
}, { timestamps: true });

module.exports = mongoose.model('Availability', availabilitySchema);