import http from 'http';

import dbInit from './config/db';
import config from './config/env';
import initApp from './config/express';
import logger from './config/winston';

const launch = () => new Promise((resolve, reject) => {
  dbInit(config)
  .then(() => {
    const app = initApp();
    const server = http.createServer(app);
    server.listen(config.port,
      () => logger.info(`Server started on port ${config.port} (${config.env})`));
    return resolve(server);
  })
  .catch((err) => {
    logger.error(`An error occured: ${err}`);
    return reject(err);
  });
});

// Required to support mocha watch, see: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) launch();
else module.exports = { launch };
