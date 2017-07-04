import gulp from 'gulp';
import babel from 'gulp-babel';

import paths from './paths';

gulp.task('babel', () => gulp.src(paths.js)
  .pipe(babel())
  .pipe(gulp.dest('dist')
));
