var path = require('path');
var webpack = require ('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist');
var NODE_MODULES = path.resolve(__dirname, 'node_modules');

var config = {
	entry: SRC + '/app.js',
	output: {
		path: DIST,
		filename: 'app.bundle.js'		
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
          			use: ['css-loader', 'sass-loader']
				})
			},
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
		new HtmlWebpackPlugin({
    		template: './src/index.html',
    		hash: true,
    		minify: {
    			collapseWhitespace: true
    		} 
		}),
		new ExtractTextPlugin('app.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
		contentBase: DIST,
		hot: true,
	}
};

module.exports = config;