export default {
  env: 'test',
  db: process.env.DB_URI || 'mongodb://localhost/test-test'
};
