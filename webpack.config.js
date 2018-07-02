const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const _root = path.resolve()
const _project = path.join(_root, '/src/shared')
const _themePath = _root + '/public/styles/'

const browserConfig = {
	entry: ['babel-polyfill', './src/browser/index.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.css' ],
		alias: {
			'@admin': _project,
			'@src': _project + '/src',
			'@common': _project + '/common',
			'@theme': _themePath
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			}, {
				test: /\.(png|jpg|eot|svg|ttf|woff)$/,
				use: [
					{
						loader: 'file-loader',
						query: {
							context: './',
							useRelativePath: false,
							outputPath: 'static/'
						}
					}
				]
			}, {
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		})
	]
}

const serverConfig = {
	entry: ['babel-polyfill', './src/server/index.js'],
	target: 'node',
	externals: [ nodeExternals() ],
	output: {
		path: __dirname,
		filename: 'server.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.css' ],
		alias: {
			'@admin': _project,
			'@src': _project + '/src',
			'@common': _project + '/common',
			'@theme': _themePath
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}, {
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	]
}

module.exports = [ browserConfig, serverConfig ]