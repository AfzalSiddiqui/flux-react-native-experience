import React from 'react';
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxListRow, FluxDivider } from '@anthropic-flux/react-native-foundation';

export function ListRowShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, { color: colors.textPrimary, padding: FluxSpacing.md }]}>Basic Rows</Text>
      <FluxListRow icon={{ type: 'ionicon', name: 'person' }} title="Profile" subtitle="View your profile" showChevron onPress={() => Alert.alert('Profile')} />
      <FluxDivider />
      <FluxListRow icon={{ type: 'ionicon', name: 'settings' }} title="Settings" showChevron onPress={() => Alert.alert('Settings')} />
      <FluxDivider />
      <FluxListRow icon={{ type: 'ionicon', name: 'notifications' }} title="Notifications" subtitle="3 new" showChevron onPress={() => Alert.alert('Notifications')} />
      <FluxDivider />
      <FluxListRow icon={{ type: 'ionicon', name: 'information-circle' }} title="About" showChevron onPress={() => Alert.alert('About')} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, padding: FluxSpacing.md, marginTop: FluxSpacing.md }]}>Without Chevron</Text>
      <FluxListRow icon={{ type: 'ionicon', name: 'star' }} title="Favorites" subtitle="Your saved items" />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, padding: FluxSpacing.md, marginTop: FluxSpacing.md }]}>Without Icon</Text>
      <FluxListRow title="Simple Row" subtitle="No icon, no chevron" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
