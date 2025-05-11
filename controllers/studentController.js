const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};
