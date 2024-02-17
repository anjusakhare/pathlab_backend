// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createDoctor,getAllDoctor,getdoctorid,updateDoctor,deleteDoctor} = require('../controllers/doctor')


// router

router.post('/doctor',createDoctor );
router.get('/alldoctor',getAllDoctor);
router.get('/doctor/:doctor_id',getdoctorid)
router.put('/doctor/:doctor_id',updateDoctor)
router.delete('/doctor/:doctor_id',deleteDoctor)


module.exports = router;
