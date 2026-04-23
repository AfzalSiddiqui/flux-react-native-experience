import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxShimmer } from '@flux-ds/react-native-foundation';

export function ShimmerShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Shapes</Text>
      <View style={{ gap: FluxSpacing.md, marginTop: FluxSpacing.sm }}>
        <FluxShimmer shape={{ type: 'line' }} />
        <FluxShimmer shape={{ type: 'circle', diameter: 48 }} />
        <FluxShimmer shape={{ type: 'rectangle', height: 100 }} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Text Block</Text>
      <View style={{ marginTop: FluxSpacing.sm }}>
        <FluxShimmer.TextBlock lines={4} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Card Skeleton</Text>
      <View style={{ marginTop: FluxSpacing.sm }}>
        <FluxShimmer.Card />
      </View>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
