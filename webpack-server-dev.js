var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config.dev.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
	colors: true,
    historyApiFallback: true
}).listen(
    config.devServer.port,
    config.devServer.host,
    (err, result) => {
        if(err){
            return console.log(err);
        }
    },
    console.log(config.output.publicPath, "MACACO")
    // console.log(`Listening at http://${config.devServer.host}:${config.devServer.port}`)
)
