import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxRadioButton } from '@flux-ds/react-native-foundation';

export function RadioButtonShowcase() {
  const colors = useFluxColors();
  const [selected, setSelected] = useState(0);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Selection Group</Text>
      <View style={styles.group}>
        {['Apple', 'Banana', 'Cherry'].map((label, i) => (
          <FluxRadioButton key={i} label={label} isSelected={selected === i} onSelect={() => setSelected(i)} />
        ))}
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Sizes</Text>
      <View style={styles.group}>
        <FluxRadioButton label="Small" isSelected size="small" />
        <FluxRadioButton label="Medium" isSelected size="medium" />
        <FluxRadioButton label="Large" isSelected size="large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Disabled</Text>
      <FluxRadioButton label="Disabled" isSelected isDisabled />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  group: { gap: FluxSpacing.sm, marginTop: FluxSpacing.sm },
});
