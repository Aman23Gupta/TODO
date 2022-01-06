exports.getAllUser = (req, res) => {
  res.status(200).send('ALL USER LIST');
};

exports.getOneUser = (req, res) => {
  res.status(200).send(`USER ID: ${req.params.id}`);
};
