import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useWireTransfers } from '../hooks/useWireTransfers';

export default function WireTransfersView() {
  const { form, onSubmit, status } = useWireTransfers();
  const { register, setValue, handleSubmit, formState: { errors } } = form;

  React.useEffect(() => {
    register('fromAccountId' as any);
    register('toRecipient' as any);
    register('amount' as any);
    register('memo' as any);
  }, [register]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Wire Transfers (Native)</Text>

      <Text style={styles.label}>From Account ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={(t: string) => setValue('fromAccountId' as any, t)}
      />
      {errors.fromAccountId && <Text style={styles.error}>{String(errors.fromAccountId.message)}</Text>}

      <Text style={styles.label}>Recipient</Text>
      <TextInput
        style={styles.input}
        onChangeText={(t: string) => setValue('toRecipient' as any, t)}
      />
      {errors.toRecipient && <Text style={styles.error}>{String(errors.toRecipient.message)}</Text>}

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        onChangeText={(t: string) => setValue('amount' as any, Number(t))}
      />
      {errors.amount && <Text style={styles.error}>{String(errors.amount.message)}</Text>}

      <Text style={styles.label}>Memo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(t: string) => setValue('memo' as any, t)}
      />

      <Button
        title={status === 'submitting' ? 'Submitting...' : 'Submit'}
        onPress={handleSubmit(onSubmit)}
      />
      {status === 'success' && <Text style={styles.success}>Transfer submitted</Text>}
      {status === 'failed' && <Text style={styles.error}>Submission failed</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, gap: 8, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  label: { fontSize: 14, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 },
  error: { color: '#D00' },
  success: { color: '#090' }
});