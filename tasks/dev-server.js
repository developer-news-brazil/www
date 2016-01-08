import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

export default (callback) => {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: true,
    proxy: {
      '*': { target: 'http://localhost:3001' }
    }
  }).listen(3000, callback);
};
