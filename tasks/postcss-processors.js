import imports from 'postcss-import';
import vars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import extend from 'postcss-extend';
import lost from 'lost';
import autoprefixer from 'autoprefixer';
import nano from 'cssnano';

export default [
  imports,
  vars,
  nested,
  extend,
  lost,
  autoprefixer,
  nano
];
