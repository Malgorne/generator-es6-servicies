import gulp from 'gulp';
import jsdoc from 'gulp-jsdoc3';

import { src } from './paths';
import configJSDoc from './jsdoc.json';

gulp.task('doc', (cb) => {
  gulp.src(src, { read: false })
  .pipe(jsdoc(configJSDoc, cb));
});
