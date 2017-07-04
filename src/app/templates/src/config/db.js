/**
 * Configure database connexion
 * @module config/db
 */
import mongoose from 'mongoose';
import util from 'util';
import Promise from 'bluebird';
import { set } from 'lodash';

import logger from './winston';

mongoose.Promise = Promise;

/**
 * Initialize Mongoose.
 * @param  { Object } config.db
 * @return { Promise }
 */
export default config => new Promise(
  (resolve, reject) => mongoose.connect(
    config.db,
    { server: { socketOptions: { keepAlive: 1 } } },
    (err) => {
      if (err) reject(`unable to connect to database: ${config.db}`);
      logger.info(`Mongoose connected at : ${config.db}`);
    // print mongoose logs in dev env
      if (config.MONGOOSE_DEBUG) {
        set(mongoose, 'debug', (collectionName, method, query, doc) =>
          logger.debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc));
      }
      resolve();
    })
);
