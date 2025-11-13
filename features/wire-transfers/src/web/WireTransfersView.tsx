import React from 'react';
import { useWireTransfers } from '../hooks/useWireTransfers';
import { Box, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Button } from '@design-system/web/Button';
import { Input } from '@design-system/web/Input';

export default function WireTransfersView() {
  const { accounts, form, onSubmit, status, balanceLabel } = useWireTransfers();
  const { control, register, handleSubmit, formState: { errors, isSubmitting } } = form;

  console.log('Form errors:', errors);
  console.log('Form values:', form.watch());

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Wire Transfers</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'grid', gap: 2 }}>
        <FormControl>
          <InputLabel id="fromAccountId-label">From Account</InputLabel>
          <Controller
            control={control}
            name="fromAccountId"
            render={({ field }) => (
              <Select labelId="fromAccountId-label" label="From Account" {...field}>
                <MenuItem value=""><em>Select...</em></MenuItem>
                {accounts.map((a) => (
                  <MenuItem key={a.id} value={a.id}>
                    {a.name} — {balanceLabel(a.id)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.fromAccountId && (
            <Typography color="error" variant="caption">{errors.fromAccountId.message as string}</Typography>
          )}
        </FormControl>

        <Input label="Recipient" {...register('toRecipient')} />
        {errors.toRecipient && (<Typography color="error" variant="caption">{errors.toRecipient.message as string}</Typography>)}

        <Input label="Amount" type="number" inputProps={{ step: '0.01', min: '0' }} {...register('amount', { valueAsNumber: true })} />
        {errors.amount && (<Typography color="error" variant="caption">{errors.amount.message as string}</Typography>)}

        <Input label="Memo (optional)" {...register('memo')} />

        <Box>
          <Button type="submit" disabled={isSubmitting}>{status === 'submitting' ? 'Submitting...' : 'Submit'}</Button>
        </Box>

        {status === 'success' && <Typography color="success.main">Transfer submitted</Typography>}
        {status === 'failed' && <Typography color="error">Submission failed</Typography>}
      </Box>
    </Container>
  );
}