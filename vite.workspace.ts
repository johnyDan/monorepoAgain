import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: { name: 'platform-core', root: './packages/platform-core', environment: 'node' }
  },
  {
    test: { name: 'design-system', root: './packages/design-system', environment: 'jsdom' }
  }
]);