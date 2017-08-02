import { forEach, has } from 'lodash';

import { launch } from '../src';
// import config from '../src/config/env';
import initialTestingRoute from './init.test';
import importedRoute from './imported.test';

const testFiles = [initialTestingRoute, importedRoute];


/**
 * This file runs the tests for the whole service.
 * When the server is initialized, a promise is created to launch multiple task
 * files.
 * @type { Function }
 */
describe('# Tests', () => {
  // Needed to launch the tests.
  before(() => launch()
    .then(ap => forEach(testFiles, (file) => {
      if (has(file, 'setApp')) {
        file.setApp(ap);
      }
    }))
  );
  forEach(testFiles, file => file.test());
});
