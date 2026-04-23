import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors, useFluxTheme } from '@flux-ds/react-native-ds';

const colorKeys = [
  'primary', 'secondary', 'accent', 'background', 'surface',
  'textPrimary', 'textSecondary', 'success', 'warning', 'error',
  'border', 'divider', 'onPrimary', 'onSecondary', 'onError', 'overlay',
] as const;

export function ColorsShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary, padding: FluxSpacing.md }]}>
        Theme Colors
      </Text>
      {colorKeys.map((key) => (
        <View key={key} style={styles.row}>
          <View style={[styles.swatch, { backgroundColor: (colors as any)[key], borderColor: colors.border }]} />
          <View style={{ flex: 1 }}>
            <Text style={[FluxTypography.body, { color: colors.textPrimary }]}>{key}</Text>
            <Text style={[FluxTypography.caption, { color: colors.textSecondary }]}>{(colors as any)[key]}</Text>
          </View>
        </View>
      ))}
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: FluxSpacing.md, paddingVertical: FluxSpacing.xs },
  swatch: { width: 40, height: 40, borderRadius: 8, marginRight: FluxSpacing.sm, borderWidth: 1 },
});
