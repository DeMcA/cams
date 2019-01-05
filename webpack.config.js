const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
      contentBase: './dist',
  },
  // devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
