export default {
  doc: ['src/app/index.js', 'README.md'],
  appTemplates: ['src/app/templates/**/.*', 'src/app/templates/**/*'],
  routeTemplates: ['src/route/templates/**/.*'],
  exceptTemplates: ['!src/app/templates/**/*'],
  jsExceptTemplates: ['src/**/*.js', '!src/app/templates/**/*'],
  cleanProject: ['generators', 'doc', 'coverage'],
  coverage: ['./generators/app/*.js', '!./generators/app/templates/**/*'],
  tests: './tests/*.test.js'
};
