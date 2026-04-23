import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxExpandableView, FluxText } from '@flux-ds/react-native-foundation';

export function ExpandableViewShowcase() {
  const colors = useFluxColors();
  const [e1, setE1] = useState(false);
  const [e2, setE2] = useState(true);
  const [e3, setE3] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Card Style</Text>
      <FluxExpandableView title="What is Flux?" isExpanded={e1} expandStyle="card" onToggle={setE1} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="body">Flux is a comprehensive design system for building consistent user interfaces across platforms.</FluxText>
      </FluxExpandableView>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Bordered Style</Text>
      <FluxExpandableView title="Getting Started" isExpanded={e2} expandStyle="bordered" onToggle={setE2} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="body">Install the packages and wrap your app with FluxThemeProvider to get started.</FluxText>
      </FluxExpandableView>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Plain Style</Text>
      <FluxExpandableView title="FAQ" isExpanded={e3} expandStyle="plain" onToggle={setE3} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="body">Frequently asked questions about the Flux Design System.</FluxText>
      </FluxExpandableView>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>With Icon</Text>
      <FluxExpandableView title="Settings" icon={{ type: 'ionicon', name: 'settings' }} isExpanded={false} expandStyle="card">
        <FluxText textStyle="body">Configure your preferences here.</FluxText>
      </FluxExpandableView>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
