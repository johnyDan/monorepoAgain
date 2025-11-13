/* Native remote for Re.Pack */
const { withRepack } = require('@callstack/repack');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = withRepack((env) => ({
  mode: 'development',
  entry: path.resolve(__dirname, 'src/native/WireTransfersView.tsx'),
  output: { publicPath: 'auto', filename: 'bundle.js', clean: true },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  devServer: { port: 4302, hot: true, allowedHosts: 'all', headers: { 'Access-Control-Allow-Origin': '*' } },
  plugins: [
    new ModuleFederationPlugin({
      name: 'wire_transfers',
      filename: 'remoteEntry.js',
      exposes: { './native': './src/native/WireTransfersView.tsx' },
      shared: { react: { singleton: true, eager: true }, 'react-native': { singleton: true, eager: true } }
    })
  ]
}));