const express = require('express');
const helmet = require('helmet');
var xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
var hpp = require('hpp');
var cors = require('cors')


const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const fileupload = require('express-fileupload');
const path = require('path');

const errorHandler = require('./middleware/error');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

//Cookies
app.use(cookieParser());

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const users = require('./routes/users');
const reviews = require('./routes/reviews');

// Dev logging middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
// File uploading
app.use(fileupload());
//mongoSanitize
app.use(mongoSanitize());
//Set Security headers
app.use(helmet());
//Prevent XSS Attacks
app.use(xss());
// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(apiLimiter);

// Private http param pollution
app.use(hpp());
// Enable CORS
app.use(cors())


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);

app.use(errorHandler);

module.exports = app;
