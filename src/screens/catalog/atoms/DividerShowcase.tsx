import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxDivider } from '@flux-ds/react-native-foundation';

export function DividerShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Horizontal</Text>
      <FluxDivider style={{ marginVertical: FluxSpacing.sm }} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Custom Color</Text>
      <FluxDivider color={colors.primary} thickness={2} style={{ marginVertical: FluxSpacing.sm }} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Vertical</Text>
      <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', gap: FluxSpacing.md, marginTop: FluxSpacing.sm }}>
        <Text style={{ color: colors.textPrimary }}>Left</Text>
        <FluxDivider axis="vertical" />
        <Text style={{ color: colors.textPrimary }}>Right</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
