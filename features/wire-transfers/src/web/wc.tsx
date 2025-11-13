import React from 'react';
import { createRoot } from 'react-dom/client';
import WireTransfersView from './WireTransfersView';

const TAG = 'dbp-wire-transfers';

class DBPWireTransfers extends HTMLElement {
  private root?: ReturnType<typeof createRoot>;
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const mount = document.createElement('div');
    root.appendChild(mount);
    this.root = createRoot(mount);
    this.root.render(<WireTransfersView />);
  }
  disconnectedCallback() {
    this.root?.unmount();
  }
}

if (!customElements.get(TAG)) {
  customElements.define(TAG, DBPWireTransfers);
}

export {};