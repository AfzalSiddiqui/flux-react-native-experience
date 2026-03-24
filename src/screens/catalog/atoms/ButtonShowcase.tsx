import React, { useState } from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxButton } from '@anthropic-flux/react-native-foundation';

export function ButtonShowcase() {
  const colors = useFluxColors();
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>Variants</Text>
      <FluxButton title="Primary Button" variant="primary" onPress={() => Alert.alert('Primary tapped')} />
      <View style={styles.gap} />
      <FluxButton title="Secondary Button" variant="secondary" onPress={() => Alert.alert('Secondary tapped')} />
      <View style={styles.gap} />
      <FluxButton title="Destructive Button" variant="destructive" onPress={() => Alert.alert('Destructive tapped')} />

      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>Sizes</Text>
      <FluxButton title="Small" size="small" onPress={() => {}} />
      <View style={styles.gap} />
      <FluxButton title="Medium" size="medium" onPress={() => {}} />
      <View style={styles.gap} />
      <FluxButton title="Large" size="large" onPress={() => {}} />

      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>States</Text>
      <FluxButton title="Loading..." isLoading onPress={() => {}} />
      <View style={styles.gap} />
      <FluxButton title="Disabled" isDisabled onPress={() => {}} />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  section: { marginTop: FluxSpacing.lg, marginBottom: FluxSpacing.sm },
  gap: { height: FluxSpacing.sm },
});
