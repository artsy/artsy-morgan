var chalk = require('chalk');
var logger = require('morgan');

var logFormat = function(tokens, req, res) {
  var status, url, urlStatus;
  url = tokens.url(req, res);
  status = tokens.status(req, res);
  urlStatus = (function() {
    switch (false) {
      case !(status >= 500):
        return chalk.red(url + ' ' + status);
      case !(status >= 400):
        return chalk.yellow(url + ' ' + status);
      case !(status >= 300):
        return chalk.cyan(url + ' ' + status);
      case !(status >= 200):
        return chalk.green(url + ' ' + status);
      default:
        return chalk.white(url + ' ' + status);
    }
  })();
  return chalk.blue(tokens.method(req, res)) +
          ' ' + urlStatus + ' ' + chalk.cyan(tokens['response-time'](req, res) + 'ms') +
          ' ' + chalk.white(tokens['remote-addr'](req, res)) +
          ' "' + chalk.white(tokens['user-agent'](req, res)) + '"';
};

module.exports.logger = process.env.NODE_ENV === 'development' ? logger('dev') : logger(logFormat);
