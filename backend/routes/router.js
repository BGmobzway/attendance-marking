const express = require('express');
const router = express.Router();
const {middleware} = require("../middleware/jwt")

const { login, signup, getTeachers } = require("../API/login");
const { addStudent } = require("../API/addStudent");

const {attendancemarking } = require("../API/attendancemarking");
router.post('/attendancemarking',middleware, attendancemarking);
router.post('/student',middleware, addStudent);



router.post("/login", login);
router.post("/signup", signup);
router.get("/teachers", getTeachers)


module.exports = router; 