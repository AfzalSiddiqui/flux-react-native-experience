import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxButton, FluxBottomSheet, FluxText, FluxListRow, FluxDivider } from '@flux-ds/react-native-foundation';

export function BottomSheetShowcase() {
  const colors = useFluxColors();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.buttons}>
        <FluxButton title="Small (25%)" onPress={() => setShow1(true)} />
        <FluxButton title="Medium (50%)" variant="secondary" onPress={() => setShow2(true)} />
        <FluxButton title="Large (85%)" variant="secondary" onPress={() => setShow3(true)} />
      </View>

      <FluxBottomSheet isPresented={show1} title="Small Sheet" detent="small" onDismiss={() => setShow1(false)}>
        <FluxText textStyle="body">This is a small bottom sheet.</FluxText>
      </FluxBottomSheet>

      <FluxBottomSheet isPresented={show2} title="Options" detent="medium" showCloseButton onDismiss={() => setShow2(false)}>
        <FluxListRow icon={{ type: 'ionicon', name: 'share' }} title="Share" showChevron onPress={() => setShow2(false)} />
        <FluxDivider />
        <FluxListRow icon={{ type: 'ionicon', name: 'copy' }} title="Copy Link" showChevron onPress={() => setShow2(false)} />
        <FluxDivider />
        <FluxListRow icon={{ type: 'ionicon', name: 'trash' }} title="Delete" iconColor={colors.error} onPress={() => setShow2(false)} />
      </FluxBottomSheet>

      <FluxBottomSheet isPresented={show3} title="Large Sheet" detent="large" showCloseButton onDismiss={() => setShow3(false)}>
        <FluxText textStyle="body">This large sheet can hold a lot of content with scrolling support.</FluxText>
        {Array.from({ length: 10 }).map((_, i) => (
          <FluxText key={i} textStyle="body" style={{ marginTop: FluxSpacing.md }}>Item {i + 1}</FluxText>
        ))}
      </FluxBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: { padding: FluxSpacing.md, gap: FluxSpacing.sm },
});
