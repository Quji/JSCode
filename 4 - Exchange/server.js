var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// Dirty ubuntuOnWindows hack
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

new WebpackDevServer(webpack(config), {
  contentBase: './src',
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunkModules: false,
    modules: false
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
