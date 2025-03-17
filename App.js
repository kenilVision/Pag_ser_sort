require('dotenv').config()
const Port =  process.env.Port
const express = require('express')
const Connect = require('./Src/Config/DBconfig')
const App = express()


App.listen(Port , ()=>{
    Connect()
    console.log("port running at local  port  = " + Port)
})