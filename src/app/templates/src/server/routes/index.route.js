import { Router } from 'express';

import test from './test.route';

export default () => {
  const router = new Router();
  // first route test.
  router.get('/init-test', (req, res) => res.send('OK'));
  // imported test route.
  router.use('/test', test);

  return router;
};
