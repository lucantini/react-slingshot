import 'babel-core/register';
import 'babel-polyfill';
import webpack from 'webpack';
import express from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import opener from 'opener';
import path from 'path';

import config from '../webpack/webpack.config.dev';
import renderRouter from './renderRouter';


const host = process.env.HOST || '0.0.0.0',
	port = process.env.PORT || 3333,
	app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


if (process.env.NODE_ENV === 'development') {
	let compiler = webpack(config)
	app.use(WebpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			hash: false,
			version: false,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: true,
			publicPath: false,
			colors: true // color is life
		}
	}));
	app.use(WebpackHotMiddleware(compiler));
}

renderRouter(app);

app.listen(port, host, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Listening at ${host}:${port}`);
	opener(`http://${host}:${port}`);
});
