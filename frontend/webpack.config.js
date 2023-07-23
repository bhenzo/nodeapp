const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
};

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
	},
    devServer: {
        proxy: {
          '/api': 'http://localhost:3007',
        },
      },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.?jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env',  ["@babel/preset-react", {"runtime": "automatic"}]],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
};
