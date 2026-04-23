import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { FluxSpacing, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxText } from '@flux-ds/react-native-foundation';

export function AttributedTextShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <FluxText
        textStyle="body"
        segments={[
          { text: 'This is ' },
          { text: 'bold', isBold: true },
          { text: ' and ' },
          { text: 'italic', isItalic: true },
          { text: ' text.' },
        ]}
      />
      <View style={styles.gap} />
      <FluxText
        textStyle="body"
        segments={[
          { text: 'Underline', isUnderline: true },
          { text: ' and ' },
          { text: 'strikethrough', isStrikethrough: true },
        ]}
      />
      <View style={styles.gap} />
      <FluxText
        textStyle="body"
        segments={[
          { text: 'Red text', color: colors.error },
          { text: ' mixed with ' },
          { text: 'green text', color: colors.success },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  gap: { height: FluxSpacing.md },
});
