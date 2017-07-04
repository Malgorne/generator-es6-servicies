import path from 'path';
import { forEach, set } from 'lodash';

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

const defaults = {
  root: path.join(__dirname, '/..'),
  port: process.env.PORT || 3000,
  MONGOOSE_DEBUG: false,
  db: process.env.DB_URI || ''
};

forEach(config.default, (value, key) => set(defaults, key, value));

export default defaults;
