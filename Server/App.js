require('dotenv').config()
const Port =  process.env.Port
const express = require('express')
const Connect = require('./Src/Config/DBconfig')
const App = express()
const route =  require("./Src/Api/Route/Index")
const cors =  require('cors')

App.use(cors())
App.use(express.json())
App.use('/',route)

App.listen(Port , ()=>{
    Connect()
    console.log("port running at local  port  = " + Port)

})