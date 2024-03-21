const express = require('express');
const router = express.Router();

const { login } = reuire("../API/login");

router.post("/login", login);



module.exports = router; 