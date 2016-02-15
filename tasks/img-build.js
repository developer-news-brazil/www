import gulp from 'gulp';

import imagemin from 'gulp-imagemin';

import paths from './paths';

export default () => {
  return gulp.src(paths.img.glob)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest));
};
