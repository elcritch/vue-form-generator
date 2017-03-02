var path = require("path");
var webpack = require("webpack");
var projectRoot = path.resolve(__dirname, '../');

var loaders = [
	{
		test: /\.vue$/,
		loader: 'vue'
	},
	{
		test: /\.js$/,
		loader: 'babel',
		include: projectRoot,
		exclude: /node_modules/
	},
	{
		test: /\.json$/,
		loader: 'json'
	},
	{
		test: /\.(woff2?|svg)$/,
		loader: "url"
		//loader: "url?limit=10000"
	},
	{
		test: /\.(ttf|eot)$/,
		loader: "url"
	}
];

module.exports = {
	devtool: "source-map",

	entry: {
		test_post_form: path.resolve("dev", "post-form", "main.js"),
		test_simple: path.resolve("dev", "simple", "main.js"),
		meta: path.resolve("dev", "meta", "main.js"),
		full: path.resolve("dev", "full", "main.js"),
		mselect: path.resolve("dev", "multiselect", "main.js")
	},

	output: {
		path: path.resolve("dev"),
		filename: "[name].js",
		publicPath: "/"
	},

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                FULL_BUNDLE: true
            }
        }),
    ],

	module: {
		loaders
	},

	resolve: {
		packageAlias: "browser"
	},

	vue: {
		autoprefixer: {
			browsers: ["last 2 versions"]
		}
	}
};
