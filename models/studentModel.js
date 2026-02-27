const db = require("../config/db");

exports.createStudent = async (data) => {
  const { name, roll_number, className, age } = data;
  await db.query(
    "INSERT INTO students (name, roll_number, class, age) VALUES (?, ?, ?, ?)",
    [name, roll_number, className, age]
  );
};

exports.getStudents = async (limit, offset) => {
  const [rows] = await db.query(
    "SELECT * FROM students LIMIT ? OFFSET ?",
    [limit, offset]
  );
  return rows;
};

exports.getByRoll = async (roll) => {
  const [rows] = await db.query(
    "SELECT * FROM students WHERE roll_number = ?",
    [roll]
  );
  return rows[0];
};

exports.updateStudent = async (id, data) => {
  const { name, className, age } = data;
  await db.query(
    "UPDATE students SET name=?, class=?, age=? WHERE id=?",
    [name, className, age, id]
  );
};

exports.deleteStudent = async (id) => {
  await db.query("DELETE FROM students WHERE id=?", [id]);
};