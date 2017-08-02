import request from 'supertest';
import { OK, NOT_FOUND } from 'http-status';
import { expect } from 'chai';

let app;

function setApp(ap) {
  app = ap;
}

/**
 * Launch the test for the init.route.
 * @return { Function } Start the test.
 */
function test() {
  // Test a good url.
  describe('## GET /<%= projectName %>/init-test', () => {
    it('should return OK', () => request(app)
      .get('/<%= projectName %>/init-test')
      .expect(OK)
      .then(res => expect(res.text).to.equal('OK')));
  });

  // Test a wrong url.
  describe('# GET /<%= projectName %>/404', () => {
    it('should return 404 status', () => request(app)
      .get('/<%= projectName %>/404-test')
      .expect(NOT_FOUND));
  });
}

export default { test, setApp };
