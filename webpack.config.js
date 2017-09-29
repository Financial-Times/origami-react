const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BowerResolvePlugin = require('bower-resolve-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  resolve: {
		// This will handle a bower.json's `main` property being an array.
		plugins: [new BowerResolvePlugin()],
		// In which folders the resolver look for modules
		// relative paths are looked up in every parent folder (like node_modules)
		// absolute paths are looked up directly
		// the order is respected
		modules: ['bower_components', 'node_modules'],
		// These JSON files are read in directories
		descriptionFiles: ['bower.json', 'package.json'],
		// These fields in the description files are looked up when trying to resolve the package directory
		mainFields: ['browser', 'main'],
		// These files are tried when trying to resolve a directory
		mainFiles: ['index', 'main'],
		// These extensions are tried when resolving a file
		extensions: ['.js', '.json']
	},
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ },
      { test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [ { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true, includePaths: ['bower_components'] }}
          ]
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
