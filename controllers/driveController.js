const Drive = require('../models/Drive');

exports.createDrive = async (req, res) => {
    const { date } = req.body;
    const driveDate = new Date(date);
    const today = new Date();

    const diff = (driveDate - today) / (1000 * 60 * 60 * 24);

    if (diff < 15) {
        return res.status(400).json({ message: 'Drive must be scheduled at least 15 days in advance' });
    }

    const drive = new Drive(req.body);
    await drive.save();
    res.status(201).json(drive);
};

exports.getUpcomingDrives = async (req, res) => {
    const today = new Date();
    const in30Days = new Date();
    in30Days.setDate(today.getDate() + 30);

    const drives = await Drive.find({
        date: { $gte: today, $lte: in30Days }
    });

    res.json(drives);
};
