const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: `${__dirname}/src/index.js`,
	output: {
		filename: 'app.bundle.js',
		path: `${__dirname}/dist`,
	},
	devServer: {
		static: `${__dirname}/dist`,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: ['/node_modules/'],
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		new ESLintPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
