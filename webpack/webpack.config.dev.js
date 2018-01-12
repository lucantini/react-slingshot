let config = require('./webpack.config.default.js'),
	path = require('path'),
	webpack = require('webpack'),
	project_path = path.join(__dirname, '../app');


config.devServer = {
	port: process.env.PORT || 3333,
	host: process.env.HOST || 'localhost'
};

config.entry = [
	'react-hot-loader/patch',
	'webpack-hot-middleware/client',
	path.join(project_path, 'src', 'index.js')
];

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
]);

config.devtool = 'source-map';

module.exports = config;
