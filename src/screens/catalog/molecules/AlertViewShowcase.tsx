import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxAlertView, FluxButton } from '@anthropic-flux/react-native-foundation';

export function AlertViewShowcase() {
  const colors = useFluxColors();
  const [dismissedId, setDismissedId] = useState<string | null>(null);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Variants</Text>
      <View style={{ gap: FluxSpacing.sm, marginTop: FluxSpacing.sm }}>
        <FluxAlertView variant="info" title="Info" message="This is an informational alert." />
        <FluxAlertView variant="success" title="Success" message="Operation completed successfully." />
        <FluxAlertView variant="warning" title="Warning" message="Please review before proceeding." />
        <FluxAlertView variant="error" title="Error" message="Something went wrong." />
      </View>

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Dismissible</Text>
      {dismissedId !== 'dismiss1' ? (
        <FluxAlertView
          variant="info"
          title="Dismissible Alert"
          message="Tap the X to dismiss this alert."
          isDismissible
          onDismiss={() => setDismissedId('dismiss1')}
          style={{ marginTop: FluxSpacing.sm }}
        />
      ) : (
        <FluxButton title="Reset Alert" variant="secondary" onPress={() => setDismissedId(null)} style={{ marginTop: FluxSpacing.sm }} />
      )}
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
