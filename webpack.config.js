const path = require('path');
const webpack  = require('webpack')

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['eslint-loader'],
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'webpack-module-hot-accept'],
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve('./build'),
    inline: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;
