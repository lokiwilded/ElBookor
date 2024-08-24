const Availability = require('../models/Availability');
const calendar = require('../config/googleCalendarConfig');

exports.fetchAvailability = async () => {
  return await Availability.find();
};

exports.updateAvailability = async (day, startTime, endTime, isOff) => {
  const availability = await Availability.findOneAndUpdate(
    { day },
    { startTime, endTime, isOff },
    { new: true, upsert: true }
  );
  
  // Example of interacting with Google Calendar API
  if (!isOff) {
    const event = {
      summary: 'Available Slot',
      start: { dateTime: `2024-08-24T${startTime}:00-07:00` },
      end: { dateTime: `2024-08-24T${endTime}:00-07:00` },
    };
    await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
  }

  return availability;
};