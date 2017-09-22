import gulp from 'gulp';
import istanbul from 'gulp-babel-istanbul';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import injectModules from 'gulp-inject-modules';

import { coverage, tests } from './paths';

gulp.task('coverage', () => gulp.src(coverage)
  .pipe(istanbul())
  .pipe(istanbul.hookRequire()
));

gulp.task('unit-tests', ['coverage'], () => gulp.src(tests)
  .pipe(babel())
  .pipe(injectModules())
  .pipe(mocha())
  .pipe(istanbul.writeReports())
  .pipe(istanbul.enforceThresholds({ thresholds: { global: 50 } }))
  .once('end', () => process.exit()
));
