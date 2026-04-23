import React, { useState } from 'react';
import { ScrollView, View, Pressable, StyleSheet } from 'react-native';
import { FluxSpacing, FluxRadius, useFluxColors } from '@flux-ds/react-native-ds';
import {
  FluxText, FluxTextField, FluxButton, FluxCard,
  FluxIcon, FluxLoader, FluxAlertView,
} from '@flux-ds/react-native-foundation';

const recipients = [
  { name: 'Alice', icon: 'person-circle' },
  { name: 'Bob', icon: 'person-circle' },
  { name: 'Carol', icon: 'person-circle' },
  { name: 'Dave', icon: 'person-circle' },
];

type PayState = 'form' | 'processing' | 'success';

export function PaymentFlowExample() {
  const colors = useFluxColors();
  const [selectedRecipient, setSelectedRecipient] = useState(0);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [state, setState] = useState<PayState>('form');

  const handlePay = () => {
    setState('processing');
    setTimeout(() => setState('success'), 2500);
  };

  if (state === 'processing') {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <FluxLoader size="large" />
        <FluxText textStyle="headline" style={{ marginTop: FluxSpacing.lg }}>Processing Payment...</FluxText>
        <FluxText textStyle="subheadline" color={colors.textSecondary} style={{ marginTop: FluxSpacing.xs }}>
          Sending ${amount} to {recipients[selectedRecipient].name}
        </FluxText>
      </View>
    );
  }

  if (state === 'success') {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <FluxIcon source={{ type: 'ionicon', name: 'checkmark-circle' }} size="large" color={colors.success} />
        <FluxText textStyle="title2" style={{ marginTop: FluxSpacing.md }}>Payment Sent!</FluxText>
        <FluxText textStyle="body" color={colors.textSecondary} style={{ marginTop: FluxSpacing.xs }}>
          ${amount} sent to {recipients[selectedRecipient].name}
        </FluxText>
        <FluxButton title="New Payment" variant="secondary" onPress={() => { setState('form'); setAmount(''); setNote(''); }} style={{ marginTop: FluxSpacing.xl, width: 200 }} />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} keyboardShouldPersistTaps="handled">
      <FluxText textStyle="title3">Select Recipient</FluxText>
      <View style={styles.chipRow}>
        {recipients.map((r, i) => (
          <Pressable
            key={i}
            onPress={() => setSelectedRecipient(i)}
            style={[
              styles.chip,
              {
                backgroundColor: i === selectedRecipient ? colors.primary : colors.surface,
                borderRadius: FluxRadius.md,
              },
            ]}
          >
            <FluxIcon
              source={{ type: 'ionicon', name: r.icon }}
              size="medium"
              color={i === selectedRecipient ? colors.onPrimary : colors.textSecondary}
            />
            <FluxText
              textStyle="caption"
              color={i === selectedRecipient ? colors.onPrimary : colors.textPrimary}
              style={{ marginTop: FluxSpacing.xxs }}
            >
              {r.name}
            </FluxText>
          </Pressable>
        ))}
      </View>

      <FluxCard style={{ marginTop: FluxSpacing.lg }}>
        <FluxTextField label="Amount" placeholder="0.00" value={amount} onChangeText={setAmount} />
        <View style={{ height: FluxSpacing.md }} />
        <FluxTextField label="Note (optional)" placeholder="What's it for?" value={note} onChangeText={setNote} />
      </FluxCard>

      <FluxButton
        title="Pay Now"
        isDisabled={!amount || parseFloat(amount) <= 0}
        onPress={handlePay}
        style={{ marginTop: FluxSpacing.lg }}
      />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: FluxSpacing.md },
  chipRow: { flexDirection: 'row', gap: FluxSpacing.sm, marginTop: FluxSpacing.sm },
  chip: { alignItems: 'center', padding: FluxSpacing.sm, flex: 1 },
});
