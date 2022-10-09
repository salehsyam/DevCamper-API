const express = require('express');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const path = require('path');

const errorHandler = require('./middleware/error');

const app = express();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

// Dev logging middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);

module.exports = app;
