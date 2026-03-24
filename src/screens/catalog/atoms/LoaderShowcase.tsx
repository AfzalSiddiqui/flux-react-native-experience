import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxLoader } from '@anthropic-flux/react-native-foundation';

export function LoaderShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Spinner Sizes</Text>
      <View style={[styles.row, { marginTop: FluxSpacing.sm }]}>
        <FluxLoader size="small" />
        <FluxLoader size="medium" />
        <FluxLoader size="large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Custom Colors</Text>
      <View style={[styles.row, { marginTop: FluxSpacing.sm }]}>
        <FluxLoader tint={colors.success} />
        <FluxLoader tint={colors.warning} />
        <FluxLoader tint={colors.error} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Progress Bar</Text>
      <View style={{ gap: FluxSpacing.sm, marginTop: FluxSpacing.sm }}>
        <FluxLoader progress={0.25} />
        <FluxLoader progress={0.5} />
        <FluxLoader progress={0.75} />
        <FluxLoader progress={1.0} tint={colors.success} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  row: { flexDirection: 'row', gap: FluxSpacing.lg, alignItems: 'center' },
});
