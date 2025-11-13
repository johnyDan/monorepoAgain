import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createBankingClient, type Account, type WireTransferInput } from '@platform-core/api/bankingClient';
import { formatCurrency } from '@platform-core/utils/formatters';
import { makePlatformCoreResolver, v } from '@platform-forms';

export type WireTransfersForm = {
  fromAccountId: string;
  toRecipient: string;
  amount: number;
  memo?: string;
};

export function useWireTransfers() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'failed'>('idle');

  useEffect(() => {
    const client = createBankingClient({ adapter: 'mock' });
    client.getAccounts().then(setAccounts);
  }, []);

  const resolver = useMemo(
    () =>
      makePlatformCoreResolver<WireTransfersForm>({
        fromAccountId: [v.required('Select an account')],
        toRecipient: [v.required('Recipient is required')],
        amount: [v.required('Amount is required'), v.minAmount(0.01), v.maxAmount(100000)]
      }),
    []
  );

  const form = useForm<WireTransfersForm>({
    resolver,
    defaultValues: { fromAccountId: '', toRecipient: '', amount: 0, memo: '' }
  });

  async function onSubmit(values: WireTransfersForm) {
    setStatus('submitting');
    const client = createBankingClient({ adapter: 'mock' });
    const input: WireTransferInput = values;
    const result = await client.submitWireTransfer(input);
    setStatus(result.status === 'success' ? 'success' : 'failed');
    if (result.status === 'success') {
      form.reset();
    }
  }

  function balanceLabel(accountId: string) {
    const acct = accounts.find((a) => a.id === accountId);
    return acct ? formatCurrency(acct.balance, acct.currency) : '';
  }

  return { accounts, form, onSubmit, status, balanceLabel };
}