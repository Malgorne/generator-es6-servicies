import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

requireDir('./tasks');

gulp.task('default', runSequence('clean', ['babel', 'doc']));
