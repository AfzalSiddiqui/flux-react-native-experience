import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';

const styles_ = ['largeTitle','title','title2','title3','headline','subheadline','body','callout','footnote','caption'] as const;

export function TypographyShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {styles_.map((s) => (
        <View key={s} style={styles.row}>
          <Text style={[FluxTypography[s], { color: colors.textPrimary }]}>{s}</Text>
          <Text style={[FluxTypography.caption, { color: colors.textSecondary }]}>
            {FluxTypography[s].fontSize}pt / {FluxTypography[s].fontWeight}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  row: { marginBottom: FluxSpacing.lg },
});
