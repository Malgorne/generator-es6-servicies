import { Router } from 'express';

import { getTest, postTest } from '../controllers/test.controller';

const router = new Router();

/**
 * @api {get} /endpoint/test/get
 * @apiDescription Tests a basic get route with a sample controller.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *   {
 *     "sucess": true
 *   }
 */
router.route('/get')
  .get(getTest);

/**
 * @api {post} /endpoint/test/post
 * @apiDescription Tests a basic post route with a sample controller.
 * @apiParam { String } a name
 * @apiParamExample { json } Example:
 * {
 *    "name": "Toto"
 * }
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *   {
 *     "name": "Toto"
 *   }
 * @apiErrorExample {string} Unknow:
 *   HTTP/1.1 400 BAD_REQUEST
 *   A name is required.
 */
router.route('/post')
  .post(postTest);

export default router;
