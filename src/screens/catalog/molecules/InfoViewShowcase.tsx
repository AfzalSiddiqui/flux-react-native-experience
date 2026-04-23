import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxInfoView } from '@flux-ds/react-native-foundation';

export function InfoViewShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Horizontal</Text>
      <FluxInfoView
        icon={{ type: 'ionicon', name: 'information-circle' }}
        title="Account Info"
        description="Your account has been verified successfully."
        alignment="horizontal"
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Vertical</Text>
      <FluxInfoView
        icon={{ type: 'ionicon', name: 'shield-checkmark' }}
        iconColor={colors.success}
        title="Secured"
        description="Your data is encrypted and protected."
        alignment="vertical"
        style={{ marginTop: FluxSpacing.sm }}
      />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Custom Icon Color</Text>
      <FluxInfoView
        icon={{ type: 'ionicon', name: 'warning' }}
        iconColor={colors.warning}
        title="Attention"
        description="Your subscription is about to expire."
        style={{ marginTop: FluxSpacing.sm }}
      />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
