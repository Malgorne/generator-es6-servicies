/**
 * Configure express application.
 * @module config/express
 */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import expressWinston from 'express-winston';
import helmet from 'helmet';
import requestLanguage from 'express-request-language';

import config from './env';
import routes from '../server/routes/index.route';
import winstonInstance from './winston';

/**
 * Configure middlewares.
 * @param { Object } app The express application
 * @returns { Void }
 */
const _configureMiddlewares = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(requestLanguage({ languages: ['en'] }));
  app.use(helmet());
  app.use(cors());
};

/**
 * Configure specific dev environment. To show beautiful logs.
 * @param { Object } app The express application
 * @returns { Void }
 */
const _configureEnvironment = (app) => {
  if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
      winstonInstance,
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms'
    }));
  }
};

export default () => {
  const app = express();
  _configureMiddlewares(app);
  _configureEnvironment(app);
  app.use('/endpoint', routes());
  return app;
};
