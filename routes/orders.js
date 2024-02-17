// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createOrders,getAllOrders,getOrdersid,updateOrders,deleteOrders} = require('../controllers/orders')


// router

router.post('/order',createOrders );
router.get('/allorder',getAllOrders);
router.get('/order/:order_id',getOrdersid)
router.put('/order/:order_id',updateOrders)
router.delete('/order/:order_id',deleteOrders)


module.exports = router;