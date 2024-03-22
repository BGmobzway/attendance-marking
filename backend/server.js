require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("./config/db").connect()
const http = require('http')
const cors = require('cors')
const path = require('path')
const app = express()
const router = require('./routes/router')
const server = http.createServer(app)
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use("/", router);
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers" ,"Origin ,X-requested-With , Content , Accept , Content-type,Authorization")
    res.setHeader("Access-Control-Allow-Methods","GET , POST,PUT,DELETE,PATCH,OPTIONS");
    next() 
  
  })

const port = process.env.SERVER_PORT || 5000
server.listen(port, () => {
    console.log(`Server runing on port ${port}...`)
})

