import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

export default defineConfig(() => ({
  plugins: [
    react(),
    ...federation({
      name: 'web_host',
      remotes: {
       wire_transfers: {
         type: 'module',
         name: 'wire_transfers',
         entry: process.env.WIRE_TRANSFERS_REMOTE || 'http://localhost:4301/remoteEntry.js',
         entryGlobalName: 'wire_transfers',
         shareScope: 'default'
       }
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true }
      }
    })
  ],
  resolve: {
    alias: {
      '@design-system': path.resolve(__dirname, '../../packages/design-system/src'),
      '@platform-core': path.resolve(__dirname, '../../packages/platform-core/src')
    }
  },
  server: { port: 4300 },
  build: { target: 'es2022' }
}));
