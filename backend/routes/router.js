const express = require('express');
const router = express.Router();
const {middleware} = require("../middleware/jwt")

const { login, signup, getTeachers } = require("../API/login");
const { addStudent, getStudent } = require("../API/addStudent");
const { addClass, getClass } = require('../API/allSchoolclass')
const { markAttendance } = require("../API/attendancemarking");
// const { addClass } = require('../API/allSchoolclass');
router.post('/attendancemarking',middleware, markAttendance);
router.post('/addstudent', addStudent);
router.post("/addClass", addClass)
router.get('/students/:classId', middleware, getStudent)


router.post("/login", login);
router.post("/signup", signup);
router.get("/teachers", getTeachers)
router.get("/getclasses", middleware, getClass)


module.exports = router; 