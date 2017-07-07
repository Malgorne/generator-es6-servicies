import gulp from 'gulp';
import jsdoc from 'gulp-jsdoc3';

import paths from './paths';
import configJSDoc from './jsdoc.json';

gulp.task('doc', (cb) => {
  gulp.src(paths.doc, { read: false })
  .pipe(jsdoc(configJSDoc, cb));
});
