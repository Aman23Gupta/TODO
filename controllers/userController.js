const User = require("../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOneUser = (req, res) => {
  res.status(200).send(`USER ID: ${req.params.id}`);
};

exports.createUser = (req, res) => {
  res.status(200).send(`USER created`);
};

exports.updateUser = (req, res) => {
  res.status(200).send(`update`);
};

exports.deleteUser = (req, res) => {
  res.status(200).send(`delete`);
};
