const express = require('express');
const router = express.Router();
const HomeControllers = require('../controllers/HomeControllers');
const feedbackcontroller = require('../controllers/feedbackcontroller');
 


router.get('/', HomeControllers); 
router.post('/users/feedback', feedbackcontroller);
 
// router.all('*', ErrorControllers);

module.exports = router


