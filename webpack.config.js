const path = require('path');

module.exports = {
  entry: './helloapp/static/helloapp/js/main.js',
  output: {
    path: path.resolve(__dirname, 'helloapp/static/helloapp/bundle'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};