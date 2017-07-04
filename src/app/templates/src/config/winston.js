/**
 * Configure winston
 * @module config/winston
 */
import winston from 'winston';

export default new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ]
});
