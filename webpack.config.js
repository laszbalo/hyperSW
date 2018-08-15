const path = require('path');
//const ViperHTMLPlugin = require('viperhtml-webpack-plugin');
const {ProvidePlugin, NormalModuleReplacementPlugin} = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', './sw.js'),
  target: 'webworker',
  mode: 'development',
  output: {
    filename: 'sw.js',
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            require('babel-plugin-viperhtml')
          ]
        }
      }
    }],
  },
  plugins: [
    // this is ****REQUIRED****   !!!!
    new NormalModuleReplacementPlugin(
      /viperhtml\/template-info\.js/,
      require.resolve('viperHTML-template-info-from-transpiled-templates')
    ),
    // Optional: I dont want to ship Node.js' Buffer to the browser
    new ProvidePlugin({
      Buffer: path.resolve(__dirname, 'src', 'buffer.js')
    }),
    // Optional: I don't use viperHTML' Component, therefore I mock it
    new NormalModuleReplacementPlugin(
      /viperhtml\/Component\.js/,
      path.resolve(__dirname, 'src', 'Component.js')
    ),
  ]
};
