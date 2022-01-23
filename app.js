const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const todoRoutes = require('./Routes/todoRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP please try in an hour!',
});
app.use('/api', limiter);

app.use(express.json());

app.use(mongoSanitize());
app.use(xss());

app.use(hpp());

app.get('/', (req, res) => {
  res.status(200).send('This is the Todo app');
});

app.use('/api/v1/todo', todoRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;
