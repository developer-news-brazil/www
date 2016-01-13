import gulp from 'gulp';

import stylelint from 'gulp-stylelint';
import reporter from 'gulp-stylelint-console-reporter';

import paths from './paths';

export default () => {
  return gulp.src(paths.css.glob)
    .pipe(stylelint({
      reporters: [
        reporter()
      ]
    }));
};
