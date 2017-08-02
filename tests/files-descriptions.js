const describedFiles = [
  {
    it: 'should generate root files',
    files: ['.gitignore', '.gitattributes', '.eslintrc', 'gulpfile.babel.js',
      'package.json', 'README.md']
  }, {
    it: 'should generate project entry script',
    files: ['src/index.js']
  }, {
    it: 'should generate config files',
    files: ['src/config/env/development.js', 'src/config/env/index.js',
      'src/config/env/production.js', 'src/config/env/test.js', 'src/config/db.js',
      'src/config/express.js', 'src/config/winston.js']
  }, {
    it: 'should generate server files',
    files: ['src/server/controllers/test.controller.js',
      'src/server/routes/index.route.js', 'test.route.js']
  }, {
    it: 'should generate gulp tasks',
    files: ['tasks/babel.task.js', 'tasks/clean.task.js', 'tasks/path.js']
  }, {
    it: 'should generate tests files',
    files: ['tasks/main.test.js', 'tasks/init.test.js', 'tasks/test.test.js']
  }
];

module.exports = describedFiles;
