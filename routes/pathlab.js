// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createPathlab,getAllPathlab,getPathlabid,updatePathlab,
    deletePathlab} = require('../controllers/pathlab')


// router

router.post('/pathlab',createPathlab );
router.get('/allpathlab',getAllPathlab );
router.get('/pathlab/:path_lab_id',getPathlabid)
router.put('/pathlab/:path_lab_id',updatePathlab)
router.delete('/pathlab/:path_lab_id',deletePathlab)


module.exports = router;