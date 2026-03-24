import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxShadow, FluxRadius, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';

const shadowKeys = ['small', 'medium', 'large'] as const;

export function ShadowsShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {shadowKeys.map((key) => (
        <View key={key} style={[styles.card, { backgroundColor: colors.surface, borderRadius: FluxRadius.md, ...FluxShadow[key] }]}>
          <Text style={[FluxTypography.headline, { color: colors.textPrimary }]}>{key}</Text>
          <Text style={[FluxTypography.caption, { color: colors.textSecondary }]}>elevation: {FluxShadow[key].elevation}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  card: { padding: FluxSpacing.lg, marginBottom: FluxSpacing.lg, alignItems: 'center' },
});
