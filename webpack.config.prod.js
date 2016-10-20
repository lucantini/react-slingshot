var config = require('./webpack.config.default'),
	webpack = require('webpack');

config.plugins.concat([
  new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
  new webpack.optimize.UglifyJsPlugin({
  	compressor: {
  		warnings: false
  	}
  })
]);

module.exports = config;
