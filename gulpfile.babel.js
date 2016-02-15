import gulp from 'gulp';

import jsLint from './tasks/js-lint';
import cssLint from './tasks/css-lint';

import cssBuild from './tasks/css-build';
import cssWatch from './tasks/css-watch';

import imgBuild from './tasks/img-build';

import devServer from './tasks/dev-server';
import nodemon from './tasks/nodemon';

gulp.task('js:lint', jsLint);
gulp.task('css:lint', cssLint);
gulp.task('lint', ['js:lint', 'css:lint']);

gulp.task('css:build', ['css:lint'], cssBuild);
gulp.task('css:watch', ['css:build'], cssWatch);

gulp.task('img:build', imgBuild);

gulp.task('dev-server', devServer);
gulp.task('nodemon', nodemon);
gulp.task('dev', ['css:watch', 'img:build', 'dev-server', 'nodemon']);
