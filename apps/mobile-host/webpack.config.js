const { withRepack } = require('@callstack/repack');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = withRepack((env) => {
  const remoteUrl = process.env.WIRE_TRANSFERS_REMOTE || 'http://10.0.2.2:4302/remoteEntry.js';
  return {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new ModuleFederationPlugin({
        name: 'mobile_host',
        remotes: {
          wire_transfers: `wire_transfers@${remoteUrl}`
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-native': { singleton: true, eager: true }
        }
      })
    ]
  };
});