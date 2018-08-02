const { IgnorePlugin } = require('webpack');
const config = require('sapper/webpack/config.js');
const pkg = require('../../package.json');

module.exports = {
  entry: config.server.entry(),
  output: config.server.output(),
  target: 'node',
  resolve: {
    extensions: ['.js', '.json', '.html'],
    mainFields: ['svelte', 'module', 'browser', 'main']
  },
  externals: Object.keys(pkg.dependencies),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: require.resolve('../../loader'),
          options: {
            css: false,
            generate: 'ssr'
          }
        }
      }
    ]
  },
  mode: process.env.NODE_ENV,
  performance: {
    hints: false // it doesn't matter if server.js is large
  },
  plugins: [new IgnorePlugin(/^encoding$/, /node-fetch/)]
};
