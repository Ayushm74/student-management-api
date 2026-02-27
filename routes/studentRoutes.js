const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const auth = require("../middleware/authMiddleware");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post(
  "/",
  auth,
  [
    body("name").notEmpty(),
    body("roll_number").notEmpty(),
    body("className").notEmpty(),
    body("age").isInt()
  ],
  validate,
  studentController.addStudent
);

router.get("/", auth, studentController.getStudents);
router.get("/:roll", auth, studentController.searchStudent);
router.put("/:id", auth, studentController.updateStudent);
router.delete("/:id", auth, studentController.deleteStudent);

module.exports = router;