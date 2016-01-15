var webpack = require('webpack');
var path = require('path');
var paths = require('./tasks/paths');

var webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('.')
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    paths.js.client
  ],
  output: {
    path: path.resolve(paths.js.dest),
    publicPath: '/public/js/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('react-hot-loader'),
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devtool: 'eval'
};

module.exports = webpackConfig;
