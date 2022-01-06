const express = require('express');
const userContoller = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userContoller.getAllUser);
router.route('/:id').get(userContoller.getOneUser);

module.exports = router;
