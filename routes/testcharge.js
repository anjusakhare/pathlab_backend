// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createTestCharge,getAllTestCharge,getTestChargeId,updateTestCharge,
    deleteTestCharge} = require('../controllers/testcharge')


// router

router.post('/testcharge',createTestCharge );
router.get('/alltestcharge',getAllTestCharge );
router.get('/testcharge/:path_lab_id',getTestChargeId)
router.put('/testcharge/:path_lab_id',updateTestCharge)
router.delete('/testcharge/:path_lab_id',deleteTestCharge)


module.exports = router;