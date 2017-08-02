import gulp from 'gulp';
import babel from 'gulp-babel';

import { appTemplates, jsExceptTemplates } from './paths';

gulp.task('copy-app-tpl', () => gulp.src(appTemplates)
  .pipe(gulp.dest('generators/app/templates'))
);

gulp.task('babel', ['copy-app-tpl'], () => gulp.src(jsExceptTemplates)
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('generators'))
);
