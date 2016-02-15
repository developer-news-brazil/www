import path from 'path';

import nodemon from 'gulp-nodemon';

export default () => {
  return nodemon({
    script: 'start.js',
    exec: 'npm run babel',
    ext: 'js jsx',
    env: {
      PORT: process.env.PORT || 3001,
      NODE_PATH: path.resolve(__dirname, '..')
    },
    tasks: ['dev-server'],
    ignore: ['app/server'],
    watch: ['app']
  });

  console.log('Webpack Dev Server listening on port 3000');
};
