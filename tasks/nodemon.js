import path from 'path';

import nodemon from 'gulp-nodemon';

export default () => {
  nodemon({
    script: 'start.js',
    exec: './node_modules/.bin/babel-node',
    ext: 'js jsx',
    env: {
      PORT: process.env.PORT || 3001,
      NODE_PATH: path.resolve(__dirname, '..')
    },
    tasks: ['dev-server']
  });

  console.log('Webpack Dev Server listening on port 3000');
};
