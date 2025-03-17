const express = require('express')
const routes = express.Router()
const controller = require('../Controller/ProductConroller')

routes.get('/',controller.GetProduct)

module.exports = routes