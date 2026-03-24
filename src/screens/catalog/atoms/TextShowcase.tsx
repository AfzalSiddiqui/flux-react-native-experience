import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FluxSpacing, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxText } from '@anthropic-flux/react-native-foundation';

export function TextShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <FluxText textStyle="largeTitle">Large Title</FluxText>
      <FluxText textStyle="title">Title</FluxText>
      <FluxText textStyle="title2">Title 2</FluxText>
      <FluxText textStyle="title3">Title 3</FluxText>
      <FluxText textStyle="headline">Headline</FluxText>
      <FluxText textStyle="subheadline">Subheadline</FluxText>
      <FluxText textStyle="body">Body text</FluxText>
      <FluxText textStyle="callout">Callout</FluxText>
      <FluxText textStyle="footnote">Footnote</FluxText>
      <FluxText textStyle="caption">Caption</FluxText>
      <FluxText textStyle="body" color={colors.primary}>Custom color text</FluxText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md, gap: FluxSpacing.sm },
});
