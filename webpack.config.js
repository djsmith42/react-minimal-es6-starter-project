var path = require('path');

module.exports = {
  entry: './app/index.js',

  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,      
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app"), // must be fully qualified file path
        query: {stage: 0} // enable ES7 features, like fat arrow class methods
      }
    ]
  }
};
