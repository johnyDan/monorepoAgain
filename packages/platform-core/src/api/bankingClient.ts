export type Account = {
  id: string;
  name: string;
  balance: number;
  currency: string;
};

export type WireTransferInput = {
  fromAccountId: string;
  toRecipient: string;
  amount: number;
  memo?: string;
};

export type WireTransferResult = {
  id: string;
  status: 'pending' | 'success' | 'failed';
};

export interface BankingClient {
  getAccounts(): Promise<Account[]>;
  submitWireTransfer(input: WireTransferInput): Promise<WireTransferResult>;
}

export type BankingClientOptions = {
  adapter?: 'mock' | 'http';
  baseUrl?: string;
};

// Factory: mock is default until real backend is wired in
export function createBankingClient(options: BankingClientOptions = {}): BankingClient {
  if (options.adapter === 'http') {
    // Placeholder for future real HTTP client adapter
    throw new Error('HTTP adapter not implemented yet. Use adapter: "mock" for now.');
  }
  return createMockBankingClient();
}

// ---------------------- Mock adapter ----------------------
function delay(ms = 300) {
  return new Promise((res) => setTimeout(res, ms));
}

let accounts: Account[] = [
  { id: 'chk-1', name: 'Checking', balance: 4200.5, currency: 'USD' },
  { id: 'sav-1', name: 'Savings', balance: 10200, currency: 'USD' }
];

function rid() {
  return Math.random().toString(36).slice(2, 10);
}

export function createMockBankingClient(): BankingClient {
  return {
    async getAccounts() {
      await delay(200);
      return accounts;
    },
    async submitWireTransfer(input) {
      await delay(400);
      if (input.amount <= 0) return { id: rid(), status: 'failed' };
      return { id: rid(), status: 'success' };
    }
  };
}