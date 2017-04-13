var morgan = require('morgan');
var logFormat = require('./logFormat.js');

module.exports = process.env.NODE_ENV === 'development' ? morgan('dev') : morgan(logFormat);
