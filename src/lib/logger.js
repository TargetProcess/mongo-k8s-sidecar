var winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    winston.format.logstash()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

module.exports = logger;