import gulp from 'gulp';
import babel from 'gulp-babel';

import paths from './paths';

gulp.task('copy-app-tpl', () => gulp.src(paths.templates)
  .pipe(gulp.dest('generators/app/templates'))
);

gulp.task('babel', ['copy-app-tpl'], () => gulp.src(paths.jsExceptTemplates)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('generators'))
);
