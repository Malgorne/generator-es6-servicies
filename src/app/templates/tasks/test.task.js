import babel from 'gulp-babel';
import gulp from 'gulp';
import injectModules from 'gulp-inject-modules';
import istanbul from 'gulp-babel-istanbul';
import mocha from 'gulp-mocha';
import processEnv from 'gulp-process-env';

import { coverage, tests } from './paths';

gulp.task('coverage', () => gulp.src(coverage)
  .pipe(istanbul())
  .pipe(istanbul.hookRequire()));

gulp.task('unit-tests', ['coverage'], () => gulp.src(tests)
  .pipe(processEnv({ NODE_ENV: 'test' }))
  .pipe(babel())
  .pipe(injectModules())
  .pipe(mocha({ timeout: 5000 }))
  .pipe(istanbul.writeReports())
  .pipe(istanbul.enforceThresholds({ thresholds: { global: 65 } }))
  .once('end', () => process.exit()));
