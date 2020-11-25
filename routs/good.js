  
const express = require('express')
const goodcontroller = require('../controller/goodcontroller')
const router = express.Router()

router.post('/',goodcontroller.addGood);
router.get('/',goodcontroller.getGoods)
module.exports = router