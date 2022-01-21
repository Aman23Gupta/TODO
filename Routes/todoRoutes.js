const express = require('express');
const todoContollers = require('../controllers/todoController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(todoContollers.getAllTodo)
  .post(todoContollers.createTodo);

router
  .route('/:id')
  .get(todoContollers.getOneTodo)
  .patch(todoContollers.updateTodo)
  .delete(todoContollers.deleteTodo);

module.exports = router;
