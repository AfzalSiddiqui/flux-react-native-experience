import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxToggle } from '@anthropic-flux/react-native-foundation';

export function ToggleShowcase() {
  const colors = useFluxColors();
  const [t1, setT1] = useState(true);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(true);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Sizes</Text>
      <View style={styles.group}>
        <FluxToggle isOn={t1} label="Small" size="small" onToggle={setT1} />
        <FluxToggle isOn={t2} label="Medium" size="medium" onToggle={setT2} />
        <FluxToggle isOn={t3} label="Large" size="large" onToggle={setT3} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Custom Color</Text>
      <FluxToggle isOn label="Success Tint" tintColor={colors.success} style={{ marginTop: FluxSpacing.sm }} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Disabled</Text>
      <FluxToggle isOn label="Disabled" isDisabled style={{ marginTop: FluxSpacing.sm }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  group: { gap: FluxSpacing.md, marginTop: FluxSpacing.sm },
});
