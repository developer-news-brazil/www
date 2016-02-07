import gulp from 'gulp';

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

import errorHandler from './postcss-handler';

import paths from './paths';

import processors from './postcss-processors';

export default () => {
  return gulp.src(paths.css.main)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', errorHandler)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest));
};
