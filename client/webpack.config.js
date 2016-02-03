const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    include: path.join(__dirname, 'src'),
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ]
  },
  devtool: 'sourcemap'
};
