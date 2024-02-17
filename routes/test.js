// routes/users.js
const express = require('express');
const router = express.Router();

//conrollers
const {createTest,getAllTest,getTestid,updateTest,deleteTest} = require('../controllers/test')


// router

router.post('/test',createTest );
router.get('/alltest',getAllTest);
router.get('/doctor/:test_id',getTestid)
router.put('/doctor/:test_id',updateTest)
router.delete('/doctor/:test_id',deleteTest)


module.exports = router;