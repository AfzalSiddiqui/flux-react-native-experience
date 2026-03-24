import React from 'react';
import { ScrollView, View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FluxSpacing, FluxTypography, useFluxColors } from '@anthropic-flux/react-native-ds';
import { FluxHeader } from '@anthropic-flux/react-native-foundation';

export function HeaderShowcase() {
  const colors = useFluxColors();
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>Basic</Text>
      <FluxHeader title="Page Title" />

      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>With Subtitle</Text>
      <FluxHeader title="Dashboard" subtitle="Welcome back" />

      <Text style={[FluxTypography.title3, styles.section, { color: colors.textPrimary }]}>With Actions</Text>
      <FluxHeader
        title="Messages"
        subtitle="3 unread"
        leadingAction={
          <Pressable onPress={() => Alert.alert('Back')}>
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </Pressable>
        }
        trailingAction={
          <Pressable onPress={() => Alert.alert('Settings')}>
            <Ionicons name="settings" size={24} color={colors.primary} />
          </Pressable>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { paddingHorizontal: FluxSpacing.md, marginTop: FluxSpacing.lg },
});
