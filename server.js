const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opener = require('opener');
const config = require('./webpack.config.dev');
const host = config.devServer.host;
const port = config.devServer.port;


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
})
.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at ${host}:${port}`);
    opener(`http://${host}:${port}`);
});
