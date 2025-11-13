import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@module-federation/vite';

export default defineConfig(() => ({
  plugins: [
    react(),
    federation({
      name: 'web_host',
      remotes: {
        // wire_transfers: process.env.WIRE_TRANSFERS_REMOTE || 'http://localhost:4301/assets/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true }
      }
    })
  ],
  server: { port: 4300 },
  build: { target: 'es2022' }
}));
