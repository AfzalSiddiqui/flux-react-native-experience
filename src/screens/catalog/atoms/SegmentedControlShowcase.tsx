import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxSegmentedControl } from '@flux-ds/react-native-foundation';

export function SegmentedControlShowcase() {
  const colors = useFluxColors();
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Filled Style</Text>
      <FluxSegmentedControl
        items={['Day', 'Week', 'Month']}
        selectedIndex={idx1}
        onSelectionChanged={setIdx1}
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Outlined Style</Text>
      <FluxSegmentedControl
        items={['List', 'Grid']}
        selectedIndex={idx2}
        segmentStyle="outlined"
        onSelectionChanged={setIdx2}
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Sizes</Text>
      <View style={{ gap: FluxSpacing.sm, marginTop: FluxSpacing.sm }}>
        <FluxSegmentedControl items={['A', 'B', 'C']} selectedIndex={0} size="small" />
        <FluxSegmentedControl items={['A', 'B', 'C']} selectedIndex={1} size="medium" />
        <FluxSegmentedControl items={['A', 'B', 'C']} selectedIndex={2} size="large" />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Disabled</Text>
      <FluxSegmentedControl items={['On', 'Off']} selectedIndex={0} isDisabled style={{ marginTop: FluxSpacing.sm }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
