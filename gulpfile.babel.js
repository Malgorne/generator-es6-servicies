import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./tasks');

gulp.task('default', ['lint', 'babel', 'doc']);
