import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

export default defineConfig(() => ({
  plugins: [
    react(),
    ...federation({
      name: 'wire_transfers',
      exposes: {
        './App': './src/web/App.tsx',
        './wc': './src/web/wc.tsx'
      },
      filename: 'remoteEntry.js',
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true }
      }
    })
  ],
  resolve: {
    alias: {
      '@design-system': path.resolve(__dirname, '../../packages/design-system/src'),
      '@platform-core': path.resolve(__dirname, '../../packages/platform-core/src'),
      '@platform-forms': path.resolve(__dirname, '../../packages/platform-forms/src')
    }
  },
  server: { port: 4301 },
  build: { target: 'es2022' }
}));