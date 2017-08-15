import gulp from 'gulp';
import jsdoc from 'gulp-jsdoc3';

import { doc } from './paths';
import configJSDoc from './jsdoc.json';

gulp.task('doc', (cb) => {
  gulp.src(doc, { read: false })
  .pipe(jsdoc(configJSDoc, cb));
});
