import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxWebView, FluxSegmentedControl } from '@anthropic-flux/react-native-foundation';

const urls = [
  'https://reactnative.dev',
  'https://docs.expo.dev',
];

export function WebViewShowcase() {
  const colors = useFluxColors();
  const [idx, setIdx] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FluxSegmentedControl
        items={['React Native', 'Expo Docs']}
        selectedIndex={idx}
        onSelectionChanged={setIdx}
        style={{ margin: FluxSpacing.md }}
      />
      <FluxWebView url={urls[idx]} showProgressBar style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
