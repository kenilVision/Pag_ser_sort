const express = require('express')
const routes = express.Router()
const Product = require("./ProductRoutes")

routes.use("/Product",Product)

module.exports = routes
