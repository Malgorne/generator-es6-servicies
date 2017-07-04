export default {
  env: 'development',
  MONGOOSE_DEBUG: true,
  db: process.env.DB_URI || 'mongodb://localhost/test-development'
};
