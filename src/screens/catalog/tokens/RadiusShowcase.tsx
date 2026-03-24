import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxRadius, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';

const radiusKeys = ['xs','sm','md','lg','xl','full'] as const;

export function RadiusShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.content}>
      {radiusKeys.map((key) => (
        <View key={key} style={styles.item}>
          <View style={[styles.box, { borderRadius: FluxRadius[key], backgroundColor: colors.primary }]} />
          <Text style={[FluxTypography.caption, { color: colors.textPrimary, marginTop: FluxSpacing.xxs }]}>{key}</Text>
          <Text style={[FluxTypography.caption, { color: colors.textSecondary }]}>{FluxRadius[key]}pt</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flexDirection: 'row', flexWrap: 'wrap', padding: FluxSpacing.md, gap: FluxSpacing.md },
  item: { alignItems: 'center' },
  box: { width: 60, height: 60 },
});
