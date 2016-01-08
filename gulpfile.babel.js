import gulp from 'gulp';

import devServer from './tasks/dev-server';
import nodemon from './tasks/nodemon';

import jsLint from './tasks/js-lint';

gulp.task('dev-server', devServer);
gulp.task('nodemon', nodemon);
gulp.task('dev', ['dev-server', 'nodemon']);

gulp.task('js:lint', jsLint);
gulp.task('lint', ['js:lint']);
