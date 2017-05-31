const describedFiles = [
  {
    it: 'should generate .git** files',
    files: ['.gitignore', '.gitattributes']
  },
  {
    it: 'should generate project basic files',
    files: ['package.json', 'README.md']
  },
  {
    it: 'should generate project entry script',
    files: ['app.js']
  }
];

module.exports = describedFiles;
