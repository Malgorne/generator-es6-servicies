import { OK, BAD_REQUEST } from 'http-status';
import logger from '../../config/winston';

/**
 * Sample controller used for a get route.
 * @param  {Object} req the request
 * @param  {Object} res the response
 * @return {Void}
 */
export const getTest = (req, res) => res.status(OK).json({ success: true });

/**
 * Sample controller used for a post route.
 * @param  {Object} req the request wich must contain a param name
 * @param  {Object} res the response
 * @return {Void}
 */
export const postTest = (req, res) => {
  const name = req.body.name;
  if (!name) {
    logger.error('A name is required.');
    return res.status(BAD_REQUEST).send('A name is required.');
  }
  return res.status(OK).json({ name });
};
