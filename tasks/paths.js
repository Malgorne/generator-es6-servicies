export default {
  doc: ['src/app/index.js', 'README.md'],
  appTemplates: ['src/app/templates/**/.*', 'src/app/templates/**/*'],
  routeTemplates: ['src/route/templates/**/.*', 'src/route/templates/**/*'],
  exceptTemplates: ['!src/app/templates/**/*', '!src/route/templates/**/*'],
  jsExceptTemplates: ['src/**/*.js', '!src/app/templates/**/*', '!src/route/templates/**/*'],
  cleanProject: ['generators', 'doc', 'coverage'],
  coverage: ['./generators/app/*.js', './generators/route/*.js', '!./generators/app/templates/**/*', '!./generators/route/templates/**/*'],
  tests: './tests/*.test.js'
};
