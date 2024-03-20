require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("./config/db").connect()
const http = require('http')
const cors = require('cors')
const path = require('path')
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json({limit: '10mb'}))


const port = process.env.SERVER_PORT || 5000
server.listen(port, ()=>{
    console.log(`Server runing on port ${port}...`)
})

