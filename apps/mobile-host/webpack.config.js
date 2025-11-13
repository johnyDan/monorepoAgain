const { withRepack } = require('@callstack/repack');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = withRepack((env) => ({
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'mobile_host',
      remotes: {
        // wire_transfers: process.env.WIRE_TRANSFERS_REMOTE || 'http://10.0.2.2:4302/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-native': { singleton: true, eager: true }
      }
    })
  ]
}));
