var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.css$/,
      loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]&importLoaders=1', 'postcss']
    }]
  },
  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: path.join(__dirname, 'src', 'css'),
      }),
      require('postcss-cssnext'),
    ];
  }
};
