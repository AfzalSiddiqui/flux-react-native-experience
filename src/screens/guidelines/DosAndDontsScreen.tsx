import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FluxSpacing, FluxRadius, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';

interface GuidelineItem {
  text: string;
  isDo: boolean;
}

interface GuidelineSection {
  title: string;
  icon: string;
  items: GuidelineItem[];
}

const sections: GuidelineSection[] = [
  {
    title: 'Colors',
    icon: 'color-palette',
    items: [
      { text: 'Use semantic color tokens (colors.primary)', isDo: true },
      { text: 'Support both light and dark themes', isDo: true },
      { text: 'Hardcode hex values directly in components', isDo: false },
      { text: 'Use opacity instead of separate color variants', isDo: false },
    ],
  },
  {
    title: 'Typography',
    icon: 'text',
    items: [
      { text: 'Use FluxTypography tokens for text styles', isDo: true },
      { text: 'Support Dynamic Type / accessibility scaling', isDo: true },
      { text: 'Use arbitrary font sizes without tokens', isDo: false },
      { text: 'Mix multiple typefaces unnecessarily', isDo: false },
    ],
  },
  {
    title: 'Spacing',
    icon: 'resize',
    items: [
      { text: 'Use FluxSpacing tokens for all padding/margins', isDo: true },
      { text: 'Keep spacing consistent within sections', isDo: true },
      { text: 'Use magic numbers for spacing values', isDo: false },
      { text: 'Mix different spacing scales in one view', isDo: false },
    ],
  },
  {
    title: 'Components',
    icon: 'cube',
    items: [
      { text: 'Use Flux components for standard UI patterns', isDo: true },
      { text: 'Compose molecules from atoms', isDo: true },
      { text: 'Rebuild components that already exist in Flux', isDo: false },
      { text: 'Override internal component styles directly', isDo: false },
    ],
  },
  {
    title: 'Accessibility',
    icon: 'accessibility',
    items: [
      { text: 'Ensure 4.5:1 contrast ratio for text', isDo: true },
      { text: 'Add accessibility labels to interactive elements', isDo: true },
      { text: 'Rely solely on color to convey information', isDo: false },
      { text: 'Disable accessibility features for aesthetics', isDo: false },
    ],
  },
];

export function GuidelinesScreen() {
  const colors = useFluxColors();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.largeTitle, { color: colors.textPrimary, padding: FluxSpacing.md }]}>
        Guidelines
      </Text>
      <Text style={[FluxTypography.subheadline, { color: colors.textSecondary, paddingHorizontal: FluxSpacing.md, marginBottom: FluxSpacing.md }]}>
        Design system best practices
      </Text>

      {sections.map((section, sIdx) => (
        <View key={sIdx} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name={section.icon as any} size={20} color={colors.primary} />
            <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginLeft: FluxSpacing.xs }]}>
              {section.title}
            </Text>
          </View>

          {section.items.map((item, iIdx) => (
            <View key={iIdx} style={styles.itemRow}>
              <View
                style={[
                  styles.badge,
                  { backgroundColor: item.isDo ? colors.success : colors.error },
                ]}
              >
                <Ionicons
                  name={item.isDo ? 'checkmark' : 'close'}
                  size={12}
                  color="#FFFFFF"
                />
              </View>
              <Text
                style={[
                  FluxTypography.body,
                  { color: colors.textPrimary, flex: 1, marginLeft: FluxSpacing.sm },
                ]}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </View>
      ))}
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: {
    paddingHorizontal: FluxSpacing.md,
    marginBottom: FluxSpacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: FluxSpacing.sm,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: FluxSpacing.xs,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
