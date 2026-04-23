import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxCardFlap, FluxText } from '@flux-ds/react-native-foundation';

export function CardFlapShowcase() {
  const colors = useFluxColors();
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Tap to Flip</Text>
      <FluxCardFlap
        isFlipped={flipped1}
        onFlip={setFlipped1}
        front={
          <View style={styles.face}>
            <FluxText textStyle="title3">Front Side</FluxText>
            <FluxText textStyle="caption">Tap to see the back</FluxText>
          </View>
        }
        back={
          <View style={styles.face}>
            <FluxText textStyle="title3">Back Side</FluxText>
            <FluxText textStyle="caption">Tap to flip back</FluxText>
          </View>
        }
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.xl }]}>Custom Duration</Text>
      <FluxCardFlap
        isFlipped={flipped2}
        onFlip={setFlipped2}
        flipDuration={1000}
        front={
          <View style={styles.face}>
            <FluxText textStyle="headline" color={colors.primary}>Slow Flip</FluxText>
            <FluxText textStyle="footnote">1 second duration</FluxText>
          </View>
        }
        back={
          <View style={styles.face}>
            <FluxText textStyle="headline" color={colors.accent}>Revealed!</FluxText>
            <FluxText textStyle="footnote">Tap to go back</FluxText>
          </View>
        }
        style={{ marginTop: FluxSpacing.sm }}
      />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  face: { alignItems: 'center', paddingVertical: FluxSpacing.xl },
});
