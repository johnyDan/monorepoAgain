import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

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
  server: { port: 4301 },
  build: { target: 'es2022' }
}));