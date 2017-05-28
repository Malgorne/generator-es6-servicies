export default {
  src: 'src/**/*.js',
  templates: ['src/app/templates/**/.*', 'src/app/templates/**/*', 'src/route/templates/**/.*', 'src/route/templates/**/*'],
  exceptTemplates: ['!src/app/templates/**/*', '!src/route/templates/**/*'],
  jsExceptTemplates: ['src/**/*.js', '!src/app/templates/**/*', '!src/route/templates/**/*'],
  cleanProject: ['generators', 'doc']
};
