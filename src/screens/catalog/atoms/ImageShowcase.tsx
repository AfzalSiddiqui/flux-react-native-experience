import React from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxImage } from '@anthropic-flux/react-native-foundation';

export function ImageShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Sizes</Text>
      <View style={[styles.row, { marginTop: FluxSpacing.sm }]}>
        <FluxImage source={{ type: 'system', name: 'person' }} size="small" />
        <FluxImage source={{ type: 'system', name: 'person' }} size="medium" />
        <FluxImage source={{ type: 'system', name: 'person' }} size="large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>With Border</Text>
      <FluxImage
        source={{ type: 'system', name: 'person' }}
        size="medium"
        borderColor={colors.primary}
        borderWidth={2}
        cornerRadius={40}
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Tappable</Text>
      <FluxImage
        source={{ type: 'system', name: 'image' }}
        size="large"
        onPress={() => Alert.alert('Image tapped')}
        style={{ marginTop: FluxSpacing.sm }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  row: { flexDirection: 'row', gap: FluxSpacing.md, alignItems: 'center' },
});
