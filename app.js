const express = require('express');
const morgan = require('morgan');

const todoRoutes = require('./Routes/todoRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.status(200).send('This is the Todo app');
});

app.use('/api/v1/todo', todoRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;
