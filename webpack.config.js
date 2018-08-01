const path = require('path');
const ViperHTMLPlugin = require('viperhtml-webpack-plugin');
const {ProvidePlugin} = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', './sw.js'),
  target: 'webworker',
  mode: 'development',
  output: {
    filename: 'sw.js',
    path: __dirname
  },
  plugins: [
    new ProvidePlugin({
      Buffer: path.resolve(__dirname, 'src', 'buffer.js') // because I dont want to ship Node.js' Buffer to the browser
    }),
    new ViperHTMLPlugin({
      mockComponent: true
    })
  ]
};
