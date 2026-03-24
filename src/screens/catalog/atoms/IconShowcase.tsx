import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxIcon } from '@anthropic-flux/react-native-foundation';

const icons = ['home', 'person', 'settings', 'notifications', 'search', 'heart', 'star', 'lock-closed', 'eye', 'card'];

export function IconShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginBottom: FluxSpacing.sm }]}>Sizes</Text>
      <View style={styles.row}>
        <FluxIcon source={{ type: 'ionicon', name: 'star' }} size="small" />
        <FluxIcon source={{ type: 'ionicon', name: 'star' }} size="medium" />
        <FluxIcon source={{ type: 'ionicon', name: 'star' }} size="large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg, marginBottom: FluxSpacing.sm }]}>Colors</Text>
      <View style={styles.row}>
        <FluxIcon source={{ type: 'ionicon', name: 'heart' }} color={colors.error} />
        <FluxIcon source={{ type: 'ionicon', name: 'checkmark-circle' }} color={colors.success} />
        <FluxIcon source={{ type: 'ionicon', name: 'warning' }} color={colors.warning} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg, marginBottom: FluxSpacing.sm }]}>Gallery</Text>
      <View style={styles.grid}>
        {icons.map((name) => (
          <View key={name} style={styles.iconItem}>
            <FluxIcon source={{ type: 'ionicon', name }} size="medium" color={colors.textPrimary} />
            <Text style={[FluxTypography.caption, { color: colors.textSecondary, marginTop: 4 }]}>{name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  row: { flexDirection: 'row', gap: FluxSpacing.lg, alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: FluxSpacing.md },
  iconItem: { alignItems: 'center', width: 70 },
});
