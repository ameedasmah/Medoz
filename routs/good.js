  
const express = require('express')
const goodcontroller = require('../controller/goodcontroller')
const router = express.Router()

router.post('/',goodcontroller.addGood)
module.exports = router