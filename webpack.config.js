
//webpack 4 config

const path = require('path');
const webpack = require('webpack');
// const merge = require('webpack-merge');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


//load config for each mode (dev/prod)
// const dev = require('./config/webpack.dev.js');
// const prod = require('./config/webpack.prod.js');

module.exports = (env, argv) => {
	let mode = env.production ? 'production' : 'development';
	console.log(mode);

	const common  = {
		mode,
		context: path.resolve(__dirname, 'component'),
		entry: {
			dashboardComponents: ['babel-polyfill', './index.js'],
		},
		output: {
			libraryTarget: 'umd',
			library: 'dashboard-react-components',
			// filename: '[name].js',
			// chunkFilename: '[name].chunk.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'dist/'
		},
		externals: {
			'd3': 'd3',
			'nvd3': 'nvd3'
		},
		optimization: {
	    splitChunks: {
	      cacheGroups: {
	        commons: {
	          test: /[\\/]node_modules[\\/]/,
	          name: 'vendors',
	          chunks: 'all'
	          // priority: -10
	        },
	        default: {
	          minChunks: 2,
	          priority: -20,
	          reuseExistingChunk: true
	        }
	      }
	    }
	  },
		module: {
	    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
	    	test: /\.(png|svg|jpg|gif)$/,
	    	use: ['file-loader']
	    },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
        	'file-loader'
        ]
     	},{ 
	     	test: /\.hbs$/, 
	     	loader: 'handlebars-loader',
	     	options: {
          // helperDirs: path.join(__dirname, 'src/client/helpers'),
          precompileOptions: {
            knownHelpersOnly: false,
      	  }
	      }
     	}]
	  },
		plugins: [
			// new CleanWebpackPlugin(['public/dist']),
			//global constants for developement/production mode
			// new webpack.DefinePlugin({
			// 	'process.env': {
		 //      NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
		 //    }
			// })
	    
		]
	};

	return common;
	// if(env.production)	
	// 	return merge(common, prod);
	// else
	// 	return merge(common, dev);

};