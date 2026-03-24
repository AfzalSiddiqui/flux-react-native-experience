import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxOptionCard } from '@anthropic-flux/react-native-foundation';

export function OptionCardShowcase() {
  const colors = useFluxColors();
  const [single, setSingle] = useState<Set<number>>(new Set([0]));
  const [multi, setMulti] = useState<Set<number>>(new Set([0, 2]));

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Single Selection</Text>
      <FluxOptionCard
        options={[
          { icon: { type: 'ionicon', name: 'card' }, label: 'Credit Card', subtitle: 'Visa ending in 4242' },
          { icon: { type: 'ionicon', name: 'wallet' }, label: 'Apple Pay' },
          { icon: { type: 'ionicon', name: 'cash' }, label: 'Bank Transfer', subtitle: 'Takes 1-3 days' },
        ]}
        selectionMode="single"
        selectedIndices={single}
        onSelectionChanged={setSingle}
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Multi Selection</Text>
      <FluxOptionCard
        options={[
          { icon: { type: 'ionicon', name: 'notifications' }, label: 'Push Notifications' },
          { icon: { type: 'ionicon', name: 'mail' }, label: 'Email Updates' },
          { icon: { type: 'ionicon', name: 'chatbubble' }, label: 'SMS Alerts' },
        ]}
        selectionMode="multi"
        selectedIndices={multi}
        onSelectionChanged={setMulti}
        style={{ marginTop: FluxSpacing.sm }}
      />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
