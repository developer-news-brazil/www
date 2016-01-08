import gulp from 'gulp';

import eslint from 'gulp-eslint';

import paths from './paths';

export default () => {
  return gulp.src([paths.js.glob])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};
