  
const express = require('express')
const goodcontroller = require('../controller/goodController')
const router = express.Router()

router.post('/',goodcontroller.addGood);
router.get('/',goodcontroller.getGoods);
router.post('/delete',goodcontroller.deleteGood);


module.exports = router