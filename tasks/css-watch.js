import gulp from 'gulp';
import paths from './paths';

export default () => {
  gulp.watch(paths.css.glob, ['css:build']);
};
