const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	FlowStatusWebpackPlugin = require('flow-status-webpack-plugin'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require("css-mqpacker"),
	extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css', {allChunks: true}),
	project_path = path.join(__dirname, 'app'),
	dist_path = path.join(__dirname, 'build');

const config = {
	entry: path.join(project_path, 'src', 'index.js'),
	output: {
		path: dist_path,
		filename: 'js/[name].[hash].js',
		publicPath: '/'
	},
	resolve: {
		root: project_path,
		alias: {
			images: 'src/assets/images'
		}
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		extractCSS,
		new HtmlWebpackPlugin({
			template: path.join(project_path, 'src/index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(dist_path),
		new webpack.optimize.DedupePlugin(),
		new FlowStatusWebpackPlugin({
			restartFlow: false,
			failOnError: true
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['eslint'],
				// define an exclude so we check just the files we need
				exclude: [/(node_modules)/, /\*spec.js/]
			}
		],
		loaders: [
			{
				test: /\.styl/,
				loader: extractCSS.extract('style-loader', ['css?sourceMap&modules&importLoaders=1&localIdentName=[local]', 'postcss', 'resolve-url', 'stylus?sourceMap'])
			}, {
				test: /\.js$/,
				exclude: [
					/(node_modules)/, /\*spec.js/
				],
				loaders: ['babel']
			}, {
				test: /\.css$/,
				loaders: ['style-loader', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]', 'resolve-url']
			}, {
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file',
				query: {
					name: 'css/fonts/[name].[ext]'
				}
			}, {
				//IMAGE LOADER
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'file',
				query: {
					name: 'images/[name].[ext]'
				}
			}, {
				// HTML LOADER
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }), mqpacker() ]

};

module.exports = config;
