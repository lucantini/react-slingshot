const webpack = require('webpack'),
	path = require('path'),
	// HtmlWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	FlowStatusWebpackPlugin = require('flow-status-webpack-plugin'),
	project_path = path.join(__dirname, '../app'),
	dist_path = path.join(__dirname, '../dist');

const config = {
	entry: [
		path.join(project_path, 'src', 'index.js')
	],
	output: {
		path: dist_path,
		filename: 'js/[name].js',
		publicPath: '/'
	},
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.js$/,
			exclude: [/(node_modules)/, /\*spec.js/],
			use: [{
				loader: 'eslint-loader',
				options: {
					failOnWarning: false,
					failOnError: false
				}
			}]
		}, {
			test: /\.js$/,
			exclude: [/(node_modules)/, /\*spec.js/],
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader',
				options: { sourceMap: true }
			}, {
				loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]\'',
				options: { sourceMap: true }
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					plugins: () => [
						require('autoprefixer'),
						require('css-mqpacker'),
					]
				}
			}]
		}, {
			//IMAGE LOADER
			test: /\.(jpe?g|png|gif|svg)$/i,
			exclude: [path.join(project_path, 'src/assets/fonts/')],
			use: [{
				loader: 'file-loader',
				query: {
					name: 'images/[name].[ext]'
				}
			}],
		}],
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..'), verbose: true }),
		new webpack.LoaderOptionsPlugin({
			options: {
				eslint: {
					failOnWarning: false,
					failOnError: false,
					fix: false,
					quiet: false,
				}
			}
		}),
		// new HtmlWebpackPlugin({
		// 	template: path.join(__dirname, '../views/index.ejs'),
		// 	inject: 'body',
		// 	filename: 'index.ejs'
		// }),
		new FlowStatusWebpackPlugin({
			restartFlow: false,
			failOnError: true
		})
	],
};

// These need to be setup so the babel loader doesn't pass through thso files (?)
require.extensions['.png'] = function () {};
require.extensions['.jpg'] = function () {};
require.extensions['.css'] = function () {};

module.exports = config;
