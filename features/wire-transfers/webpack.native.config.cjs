/* 
 * React Native Module Federation Config (Work In Progress)
 * 
 * Note: React Native with webpack Module Federation is complex and typically
 * requires Metro bundler or Re.Pack. This config is a placeholder.
 * For production use, consider using Metro with @react-native-community/cli-plugin-metro
 * or Re.Pack for proper React Native Module Federation support.
 */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/native/index.ts'),
  output: { 
    publicPath: 'http://localhost:4302/', 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-native')
  },
  resolve: { 
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@design-system': path.resolve(__dirname, '../../packages/design-system/src'),
      '@platform-core': path.resolve(__dirname, '../../packages/platform-core/src'),
      '@platform-forms': path.resolve(__dirname, '../../packages/platform-forms/src'),
      // Externalize react-native for now
      'react-native': path.resolve(__dirname, 'node_modules/react-native')
    }
  },
  externals: {
    // React Native should be provided by the host app
    'react-native': 'react-native'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  devServer: { 
    port: 4302,
    hot: false,
    static: {
      directory: path.join(__dirname, 'dist-native')
    },
    allowedHosts: 'all',
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
};