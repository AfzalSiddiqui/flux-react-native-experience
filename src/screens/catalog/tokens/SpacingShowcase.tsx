import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';

const spacingKeys = ['xxxs','xxs','xs','sm','md','lg','xl','xxl'] as const;

export function SpacingShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {spacingKeys.map((key) => (
        <View key={key} style={styles.row}>
          <Text style={[FluxTypography.body, { color: colors.textPrimary, width: 60 }]}>{key}</Text>
          <View style={[styles.bar, { width: FluxSpacing[key], backgroundColor: colors.primary }]} />
          <Text style={[FluxTypography.caption, { color: colors.textSecondary, marginLeft: FluxSpacing.xs }]}>
            {FluxSpacing[key]}pt
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: FluxSpacing.md },
  bar: { height: 20, borderRadius: 4 },
});
