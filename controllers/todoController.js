const Todo = require('../models/todoModel');

//1) GET ALL TODOS
exports.getAllTodo = async (req, res) => {
  try {
    const limit = req.query.limit * 1 || 100;
    const page = req.query.page * 1 || 1;
    const skip = (page-1)*limit;

    const todo = await Todo.find().skip(skip).limit(limit).sort('-createdAt');

    res.status(200).json({
      status: 'success',
      results: todo.length,
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

//2) CREATE TODO
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

//3) GET ONE TODO
exports.getOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

//4) DELETE TODO
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

//5) UPDATE TODO
exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Updated',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
