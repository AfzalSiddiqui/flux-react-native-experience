import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxCheckBox } from '@flux-ds/react-native-foundation';

export function CheckBoxShowcase() {
  const colors = useFluxColors();
  const [checks, setChecks] = useState([false, false, false, true]);

  const toggle = (i: number) => {
    const next = [...checks];
    next[i] = !next[i];
    setChecks(next);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Filled Style</Text>
      <View style={styles.group}>
        <FluxCheckBox isChecked={checks[0]} label="Option A" onToggle={() => toggle(0)} />
        <FluxCheckBox isChecked={checks[1]} label="Option B" onToggle={() => toggle(1)} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Outlined Style</Text>
      <View style={styles.group}>
        <FluxCheckBox isChecked={checks[2]} label="Option C" checkStyle="outlined" onToggle={() => toggle(2)} />
        <FluxCheckBox isChecked={checks[3]} label="Option D" checkStyle="outlined" onToggle={() => toggle(3)} />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Sizes</Text>
      <View style={styles.group}>
        <FluxCheckBox isChecked size="small" label="Small" />
        <FluxCheckBox isChecked size="medium" label="Medium" />
        <FluxCheckBox isChecked size="large" label="Large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Disabled</Text>
      <FluxCheckBox isChecked label="Disabled checked" isDisabled />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  group: { gap: FluxSpacing.sm, marginTop: FluxSpacing.sm },
});
