import { Router } from 'express';

import test from './imported.route';

export default () => {
  const router = new Router();
  // first route test.
  router.get('/init-test', (req, res) => res.send('OK'));
  // imported test route.
  router.use('/imported', test);

  return router;
};
