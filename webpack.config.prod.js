var config = require('./webpack.config.default'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css', { allChunks: true }),
	webpack = require('webpack');

config.plugins = config.plugins.concat([
	extractCSS,
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	})
]);

config.module.loaders.unshift({
	test: /\.styl/,
	loader: extractCSS.extract('style-loader', ['css?sourceMap&modules&importLoaders=1&localIdentName=[local]', 'postcss', 'resolve-url', 'stylus?sourceMap'])
});

module.exports = config;
