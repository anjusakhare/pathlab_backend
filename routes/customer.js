// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createCustomer,getAllCustomers,getCustomrid,updateCustomer,
    deleteCustomer} = require('../controllers/customer')


// router

router.post('/customer',createCustomer );
router.get('/allcoustomer',getAllCustomers );
router.get('/customer/:customer_id',getCustomrid)
router.put('/customer/:customer_id',updateCustomer)
router.delete('/customer/:customer_id',deleteCustomer)


module.exports = router;
