module.exports = {
  js: {
    src: 'app',
    glob: 'app/**/*.js',
    dest: 'build/js/',
    client: 'app/client/index.js'
  },
  css: {
    src: 'app/styles/',
    glob: 'app/styles/**/*.css',
    main: 'app/styles/main.css',
    dest: 'build/css/'
  }
};
