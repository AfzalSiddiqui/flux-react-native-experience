import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxBoxGrid } from '@anthropic-flux/react-native-foundation';

export function BoxGridShowcase() {
  const colors = useFluxColors();
  const [single, setSingle] = useState<Set<number>>(new Set([0]));
  const [multi, setMulti] = useState<Set<number>>(new Set([0, 3]));

  const items = [
    { icon: { type: 'ionicon' as const, name: 'home' }, label: 'Home', color: colors.primary },
    { icon: { type: 'ionicon' as const, name: 'card' }, label: 'Pay', color: colors.success },
    { icon: { type: 'ionicon' as const, name: 'swap-horizontal' }, label: 'Transfer', color: colors.accent },
    { icon: { type: 'ionicon' as const, name: 'wallet' }, label: 'Wallet', color: colors.warning },
    { icon: { type: 'ionicon' as const, name: 'bar-chart' }, label: 'Stats', color: colors.error },
    { icon: { type: 'ionicon' as const, name: 'settings' }, label: 'Settings', color: colors.textSecondary },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>3 Columns - Single Select</Text>
      <FluxBoxGrid
        items={items}
        columns={3}
        selectionMode="single"
        selectedIndices={single}
        onSelectionChanged={setSingle}
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>2 Columns - Multi Select</Text>
      <FluxBoxGrid
        items={items.slice(0, 4)}
        columns={2}
        selectionMode="multi"
        selectedIndices={multi}
        onSelectionChanged={setMulti}
        itemSize="large"
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>No Selection</Text>
      <FluxBoxGrid items={items} columns={3} selectionMode="none" itemSize="small" style={{ marginTop: FluxSpacing.sm }} />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
