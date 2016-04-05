
import postcssImport from 'postcss-import';
import postcssFor from 'postcss-for';
import postcssEach from 'postcss-each';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import postcssMixins from 'postcss-mixins';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default [
  postcssImport,
  postcssMixins,
  postcssEach,
  postcssFor,
  postcssSimpleVars,
  postcssCalc({ mediaQueries: true }),
  postcssNested,
  postcssColorFunction,
  postcssCustomMedia,
  autoprefixer({
    browsers: ['last 3 versions']
  }),
  cssnano
];
