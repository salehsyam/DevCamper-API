const express = require('express');
const morgan = require('morgan');

const app = express();
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('error', {
    error,
  });
});

module.exports = app;
