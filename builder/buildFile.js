const path = require('path');
const browserSync = require('browser-sync').create('My Server');
const args = process.argv.slice(2);
const mode = args[0];

global.builder = {
  pathSourse: path.join(__dirname, '../', 'src'),
  pathBuild: path.join(__dirname, '../', 'dist'),
  plugins: {
    server: browserSync,
  },
};

const inlineCss = require('./modules/inline-css');
const server = require('./modules/server');
const minify = require('./modules/minify');
const uploadFile = require('./modules/upload-file');
const pathToUrl = require('./modules/path-to-url');

function watcher() {
<<<<<<< HEAD
  inlineCss(uploadFile.bind(this, pathToUrl));
=======
  inlineCss(uploadFile.bind(this, pathToUrl.bind(this, server)));
>>>>>>> 7fa2113fe3bc7b8629f91a49b12937361422b598
}

if (mode === 'dev') {
  inlineCss(uploadFile.bind(this, pathToUrl.bind(this, server)));
  browserSync.watch(path.join(global.builder.pathSourse, '*.*')).on('change', watcher);
}

if (mode === 'build') {
  inlineCss(uploadFile.bind(this, pathToUrl.bind(this, minify)));
}
