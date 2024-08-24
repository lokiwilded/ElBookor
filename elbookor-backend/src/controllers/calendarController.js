const calendarService = require('../services/calendarService');

exports.getAvailability = async (req, res) => {
  try {
    const availability = await calendarService.fetchAvailability();
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching availability' });
  }
};

exports.updateAvailability = async (req, res) => {
  try {
    const { day, startTime, endTime, isOff } = req.body;
    const updatedAvailability = await calendarService.updateAvailability(day, startTime, endTime, isOff);
    res.status(200).json(updatedAvailability);
  } catch (error) {
    res.status(500).json({ message: 'Error updating availability' });
  }
};