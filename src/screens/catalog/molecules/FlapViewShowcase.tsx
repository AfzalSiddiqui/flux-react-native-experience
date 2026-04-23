import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxFlapView, FluxText } from '@flux-ds/react-native-foundation';

export function FlapViewShowcase() {
  const colors = useFluxColors();
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [idx3, setIdx3] = useState(0);

  const content = ['First tab content', 'Second tab content', 'Third tab content'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Underlined</Text>
      <FluxFlapView
        tabs={[{ title: 'Overview' }, { title: 'Details' }, { title: 'Reviews' }]}
        selectedIndex={idx1}
        flapStyle="underlined"
        onTabChanged={setIdx1}
        style={{ marginTop: FluxSpacing.sm }}
      >
        {(i) => <FluxText textStyle="body" style={{ paddingVertical: FluxSpacing.md }}>{content[i]}</FluxText>}
      </FluxFlapView>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Filled</Text>
      <FluxFlapView
        tabs={[{ title: 'Tab A' }, { title: 'Tab B' }]}
        selectedIndex={idx2}
        flapStyle="filled"
        onTabChanged={setIdx2}
        style={{ marginTop: FluxSpacing.sm }}
      >
        {(i) => <FluxText textStyle="body" style={{ paddingVertical: FluxSpacing.md }}>{i === 0 ? 'Content A' : 'Content B'}</FluxText>}
      </FluxFlapView>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Pill</Text>
      <FluxFlapView
        tabs={[{ title: 'All' }, { title: 'Active' }, { title: 'Done' }]}
        selectedIndex={idx3}
        flapStyle="pill"
        onTabChanged={setIdx3}
        style={{ marginTop: FluxSpacing.sm }}
      >
        {(i) => <FluxText textStyle="body" style={{ paddingVertical: FluxSpacing.md }}>{content[i]}</FluxText>}
      </FluxFlapView>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
