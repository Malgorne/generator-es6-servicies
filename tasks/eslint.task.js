import gulp from 'gulp';
import eslint from 'gulp-eslint';

import paths from './paths';

gulp.task('lint', () => gulp.src(paths.src)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()
));
