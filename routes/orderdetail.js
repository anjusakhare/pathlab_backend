// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createOrderDetail,getAllOrderDetail,getOrderDetailid,updateOrderDetail,deleteOrderDetail} = require('../controllers/orderdetails')


// router

router.post('/orderdetail',createOrderDetail );
router.get('/allorderdetail',getAllOrderDetail);
router.get('/orderdetail/:order_id',getOrderDetailid)
router.put('/orderdetail/:order_id',updateOrderDetail)
router.delete('/orderdetail/:order_id',deleteOrderDetail)


module.exports = router;