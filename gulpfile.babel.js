import gulp from 'gulp';

import jsLint from './tasks/js-lint';
import cssLint from './tasks/css-lint';

import cssBuild from './tasks/css-build';
import cssWatch from './tasks/css-watch';

import devServer from './tasks/dev-server';
import nodemon from './tasks/nodemon';

gulp.task('js:lint', jsLint);
gulp.task('css:lint', cssLint);
gulp.task('lint', ['js:lint', 'css:lint']);

gulp.task('css:build', cssBuild);
gulp.task('css:watch', ['css:build'], cssWatch);

gulp.task('dev-server', devServer);
gulp.task('nodemon', nodemon);
gulp.task('dev', ['dev-server', 'nodemon', 'css:watch']);
