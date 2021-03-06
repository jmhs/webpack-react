const 	path = require('path'),
		webpack = require('webpack')

const 	ExtractTextPlugin = require('extract-text-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
		CleanWebpackPlugin = require('clean-webpack-plugin'),
		ImageminPlugin = require('imagemin-webpack-plugin').default,
		imageminJpegRecompress = require('imagemin-jpeg-recompress'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		DashboardPlugin = require('webpack-dashboard/plugin')





/*-----------------------------------------------------------------------------*/
// Webpack Bundle Analyzer *** UNCOMMENT THIS SECTION
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/*------------------------------------------------------------------------------*/

console.log("============================================================================")
console.log("   Compling for: " + process.env.NODE_ENV.toUpperCase())
console.log("   Build time: " + new Date().toLocaleTimeString())
console.log("============================================================================\n")



/*-------------------------------------------------------------------------------------------
 * PLUGIN
 *-----------------------------------------------------------------------------------------*/
 const pluginsArray = [
	//- Webpack Build Notifier
	//-----------------------------------------------------------------------
		new WebpackBuildNotifierPlugin({
	      title: "Webpack Build",
	      logo: path.resolve("./img/favicon.png"),
	      suppressSuccess: true
	    }),

	//- Webpack Dashboard
	//-----------------------------------------------------------------------
		new DashboardPlugin(),

	//- Expose Dev/Prod Enviroment to JS
	//-----------------------------------------------------------------------
		new webpack.DefinePlugin({
		    DEVELOPMENT: JSON.stringify(process.env.NODE_ENV === "development"),
		    PRODUCTION: JSON.stringify(process.env.NODE_ENV === "production"),
		}),

	//- HTML Webpack individual files
	//-----------------------------------------------------------------------
		new HtmlWebpackPlugin({
			chunks: ['main'],
			preload: false,
			filename: 'index.html',
			template: 'src/index.html'
		}),

	//- Split common chunks into a seperate JS vendor file
	//-----------------------------------------------------------------------
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: "vendor",
		//   // filename: "js/bundle-vendor.[hash].js",
		//   filename: "js/bundle-vendor.js",
		//   minChunks: 5,
		// }),

	//- Extract out CSS into a seperate file
	//-----------------------------------------------------------------------
		new ExtractTextPlugin({
			filename: 'bundle-scss.css',
			allChunks: true,
		}),

	/*---------------------------------------------------------------------*/
	// Webpack Bundle Analyzer *** UNCOMMENT THIS SECTION
		// new BundleAnalyzerPlugin(),
	/*---------------------------------------------------------------------*/

	//- Copies individual files or entire directories to DIST without bundling
	//-----------------------------------------------------------------------
		new CopyWebpackPlugin([
			{ from: 'src/externals/js/*', to: 'externals/js/[name].[ext]' },
			{ from: 'src/externals/video/*', to: 'externals/video/[name].[ext]' }
		]),
 ]


 //- RUNS ONLY IN PRODUCTION MODE
 if (process.env.NODE_ENV === "production") {
    pluginsArray.push(
    	//- Remove Dist folder before compiling
		//-------------------------------------------------------------------
		 new CleanWebpackPlugin(['dist']),

		//- UglifyJS
		//-----------------------------------------------------------------------
		 new webpack.optimize.UglifyJsPlugin({ compress:{ warnings: false } }),

		//- AggressiveMerging
		//-----------------------------------------------------------------------
		 new webpack.optimize.AggressiveMergingPlugin(),

		//- Image Optimisation
		//-----------------------------------------------------------------------
		 new ImageminPlugin({
			test: 'img/***',
				jpegtran: null,
				gifsicle: {
					interlaced: false,
				},
				pngquant: {
					quality: '70-75',
					speed: 7,
				},
				optipng: {
					optimizationLevel: 2,
				},
				svgo: {
					removeViewBox: false,
					removeEmptyAttrs: true,
				},

			plugins: [
				imageminJpegRecompress({
					quality: 'low'
				})
			]
		 })
    );
 }





/*-------------------------------------------------------------------------------------------
 * CONFIG
 *-----------------------------------------------------------------------------------------*/
 module.exports = {
	entry: {
		main: './src/js/main.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
	},

	devServer: {
		contentBase: '.',
		host: '0.0.0.0',
		port: 3000,
		disableHostCheck: true
	},

	devtool: "#inline-source-map", // Default development sourcemap

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
                loader: 'babel-loader',
								query: {
										"presets": [
										 "react",
										 "env",
											"es2015",
											"stage-2"
										],
										"plugins": [
											"transform-react-jsx-img-import",
											"transform-class-properties",
											"transform-flow-strip-types"
										]

                 }
                // Running off .babelrc
			},
			{
				 test: /\.jsx?$/,
				 loader: 'babel-loader',
				 exclude: /node_modules/,
				 query: {
						 "presets": [
							"react",
							"env",
							 "es2015",
							 "stage-2"
						 ],
						 "plugins": [
							 "transform-react-jsx-img-import",
							 "transform-class-properties",
							 "transform-flow-strip-types"
						 ]

					}
			 },
			{
                test: /\.scss$/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 2,
								localIdentName: '[local]',
								sourceMap: true,
								minimize: true,
							}
						},
			            {
			            	loader: 'postcss-loader',
			            	options: {
			            		sourceMap: true
			            	}
			            },
			            {
			            	loader: 'sass-loader',
			            	options: {
			            		sourceMap: true
			            	}
			            },
					]
				}))
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							// name: '[name].[hash].[ext]',
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					},
				]
			},

			{
				test: /\.(eot|ttf|woff|woff2)$/i,
                use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					},
				]
			}
		]
	},

	resolve: {
	    alias: {
	    	/*---------------------------------------------------------------
	    	 * // Instead of using relative paths when importing like so:
			 *		import Utility from '../../utilities/utility';
			 * // you can use the alias:
			 *		import Utility from 'Vendor/utility';
	    	---------------------------------------------------------------*/
	    	_components: path.resolve(__dirname, 'src/js/components/'),
	    	_vendor: path.resolve(__dirname, 'src/js/vendor/')
	    }
	},

	plugins: pluginsArray
 }
