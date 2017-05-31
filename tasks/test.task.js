import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import injectModules from 'gulp-inject-modules';

import paths from './paths';

gulp.task('coverage', () => gulp.src(paths.coverage)
  .pipe(istanbul())
  .pipe(istanbul.hookRequire()
));

gulp.task('unit-tests', ['coverage'], () => gulp.src(paths.tests)
  .pipe(babel())
  .pipe(injectModules())
  .pipe(mocha())
  .pipe(istanbul.writeReports())
  .pipe(istanbul.enforceThresholds({ thresholds: { global: 60 } }))
  .once('end', () => process.exit()
));
