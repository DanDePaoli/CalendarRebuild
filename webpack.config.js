// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// };





var path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // test: /\.m?js$/,
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react",{
              'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      }
    ]
  }
};



// const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BrotliPlugin = require('brotli-webpack-plugin');

// const CLIENT_DIR = path.join(__dirname, '/client');
// const PUBLIC_DIR = path.join(__dirname, '/public');

// module.exports = {
//   entry: `${CLIENT_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: PUBLIC_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include : CLIENT_DIR,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   },
//   plugins: [
//     new CompressionPlugin({
//       filename: '[path].gz',
//       algorithm: 'gzip',
//       test: /\.js$|\.css$|\.html$/,
//       threshold: 10240,
//       minRatio: 0.8,
//     }),
//     new BrotliPlugin({
//         asset: '[path].br[query]',
//         test: /\.(js|css|html|svg)$/,
//         threshold: 10240,
//         minRatio: 0.8
//     })
//   ]
// };