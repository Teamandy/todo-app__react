var path = require('path');
var webpack = require ('webpack');
var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist');
var NODE_MODULES = path.resolve(__dirname, 'node_modules');

var config = {
	entry: SRC + '/index.js',
	output: {
		path: DIST,
		filename: 'app.js'		
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: NODE_MODULES,
				use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}	
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
		contentBase: DIST,
		hot: true,
	}
};

module.exports = config;