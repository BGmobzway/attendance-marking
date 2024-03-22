const express = require('express');
const router = express.Router();

const { login, signup } = require("../API/login");
const { addStudent } = require("../API/addStudent");

const {attendancemarking } = require("../API/attendancemarking");
router.post('/attendancemarking',attendancemarking);
router.post('/student', addStudent);



router.post("/login", login);
router.post("/signup", signup);


module.exports = router; 