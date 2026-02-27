const studentModel = require("../models/studentModel");

exports.addStudent = async (req, res) => {
  try {
    await studentModel.createStudent(req.body);
    res.json({ message: "Student added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    const students = await studentModel.getStudents(limit, offset);
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchStudent = async (req, res) => {
  try {
    const student = await studentModel.getByRoll(req.params.roll);
    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    await studentModel.updateStudent(req.params.id, req.body);
    res.json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await studentModel.deleteStudent(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};