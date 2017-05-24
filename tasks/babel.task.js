import gulp from 'gulp';
import babel from 'gulp-babel';

import paths from './paths';

gulp.task('babel', () => gulp.src(paths.src)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('generators'))
);
