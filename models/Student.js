const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    studentId: String,
    vaccinated: [{
        vaccineName: String,
        date: Date,
        driveId: mongoose.Schema.Types.ObjectId,
    }],
});

module.exports = mongoose.model('Student', studentSchema);
