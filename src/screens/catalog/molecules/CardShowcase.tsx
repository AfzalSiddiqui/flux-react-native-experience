import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxShadow, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxCard, FluxText } from '@flux-ds/react-native-foundation';

export function CardShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Default Card</Text>
      <FluxCard style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="headline">Card Title</FluxText>
        <FluxText textStyle="body">This is a default card with small shadow.</FluxText>
      </FluxCard>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Medium Shadow</Text>
      <FluxCard shadow={FluxShadow.medium} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="headline">Medium Shadow</FluxText>
        <FluxText textStyle="body">Card with medium elevation shadow.</FluxText>
      </FluxCard>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Large Shadow</Text>
      <FluxCard shadow={FluxShadow.large} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="headline">Large Shadow</FluxText>
        <FluxText textStyle="body">Card with large elevation shadow.</FluxText>
      </FluxCard>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Custom Padding</Text>
      <FluxCard padding={FluxSpacing.xl} cornerRadius={24} style={{ marginTop: FluxSpacing.sm }}>
        <FluxText textStyle="headline">Custom Card</FluxText>
        <FluxText textStyle="body">Extra padding and larger corner radius.</FluxText>
      </FluxCard>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
