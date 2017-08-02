import gulp from 'gulp';
import del from 'del';

import { cleanProject } from './paths';

gulp.task('clean', () => del(cleanProject));
