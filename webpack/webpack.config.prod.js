let config = require('./webpack.config.default.js'),
	// ExtractTextPlugin = require('extract-text-webpack-plugin'),
	// extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css'),
	webpack = require('webpack');

config.plugins = config.plugins.concat([
	// extractCSS,
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	})
]);

config.output.filename = 'js/[name].[hash].js';

config.module.rules.unshift({
	test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	use: [{
		loader: 'file-loader',
	}],
});

module.exports = config;
