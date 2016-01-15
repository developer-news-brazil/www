var webpack = require('webpack');
var path = require('path');
var paths = require('./tasks/paths');

var webpackConfig = {
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve('.')
  },
  entry: [
    paths.js.client,
  ],
  output: {
    path: path.resolve(paths.js.dest),
    publicPath: '/public/js/',
    filename: 'main.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('babel-loader')
        ]
      },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  node: {
    setImmediate: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'source-map'
};

module.exports = webpackConfig;
