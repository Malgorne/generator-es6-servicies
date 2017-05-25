import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./tasks');

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['babel', 'doc']);
