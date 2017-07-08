import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./tasks');

gulp.task('default', ['babel', 'doc']);

gulp.task('tests', ['lint']);
