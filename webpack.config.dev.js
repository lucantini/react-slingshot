var config = require('./webpack.config.default'),
	path = require('path'),
	webpack = require('webpack'),
  project_path = path.join(__dirname, 'app'),
	dist_path = path.join(__dirname, 'build');

config.debug = true;

config.devServer = {
	inline: true,
	contentBase: dist_path,
	hot: true,
	colors: true,
	port: process.env.PORT || 3333,
	host: process.env.HOST || '0.0.0.0'
};

config.entry = [
		`webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}`,
    'webpack/hot/only-dev-server',
		path.join(project_path, 'src', 'index.js')
];

config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
]);

config.devtool = 'eval';

module.exports = config;
