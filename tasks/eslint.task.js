import gulp from 'gulp';
import eslint from 'gulp-eslint';

import { jsExceptTemplates } from './paths';

gulp.task('lint', () => gulp.src(jsExceptTemplates)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()
));
