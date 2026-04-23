import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxListRow } from '@flux-ds/react-native-foundation';

interface CatalogItem {
  title: string;
  screen: string;
  icon: string;
}

const sections = [
  {
    title: 'Tokens',
    data: [
      { title: 'Colors', screen: 'Colors', icon: 'color-palette' },
      { title: 'Typography', screen: 'Typography', icon: 'text' },
      { title: 'Spacing', screen: 'Spacing', icon: 'resize' },
      { title: 'Radius', screen: 'Radius', icon: 'square' },
      { title: 'Shadows', screen: 'Shadows', icon: 'partly-sunny' },
    ] as CatalogItem[],
  },
  {
    title: 'Atoms',
    data: [
      { title: 'Button', screen: 'Button', icon: 'finger-print' },
      { title: 'Text', screen: 'Text', icon: 'text' },
      { title: 'Attributed Text', screen: 'AttributedText', icon: 'document-text' },
      { title: 'Icon', screen: 'Icon', icon: 'star' },
      { title: 'Image', screen: 'Image', icon: 'image' },
      { title: 'Loader', screen: 'Loader', icon: 'reload' },
      { title: 'Divider', screen: 'Divider', icon: 'remove' },
      { title: 'CheckBox', screen: 'CheckBox', icon: 'checkbox' },
      { title: 'RadioButton', screen: 'RadioButton', icon: 'radio-button-on' },
      { title: 'Toggle', screen: 'Toggle', icon: 'toggle' },
      { title: 'Segmented Control', screen: 'SegmentedControl', icon: 'git-compare' },
      { title: 'Shimmer', screen: 'Shimmer', icon: 'pulse' },
    ] as CatalogItem[],
  },
  {
    title: 'Molecules',
    data: [
      { title: 'Card', screen: 'Card', icon: 'card' },
      { title: 'TextField', screen: 'TextField', icon: 'create' },
      { title: 'ListRow', screen: 'ListRow', icon: 'list' },
      { title: 'AlertView', screen: 'AlertView', icon: 'alert-circle' },
      { title: 'InfoView', screen: 'InfoView', icon: 'information-circle' },
      { title: 'OptionCard', screen: 'OptionCard', icon: 'options' },
      { title: 'ExpandableView', screen: 'ExpandableView', icon: 'chevron-down' },
      { title: 'FlapView', screen: 'FlapView', icon: 'albums' },
      { title: 'CardFlap', screen: 'CardFlap', icon: 'sync' },
      { title: 'BoxGrid', screen: 'BoxGrid', icon: 'apps' },
    ] as CatalogItem[],
  },
  {
    title: 'Organisms',
    data: [
      { title: 'Header', screen: 'Header', icon: 'menu' },
      { title: 'BottomSheet', screen: 'BottomSheet', icon: 'chevron-up' },
      { title: 'FormSection', screen: 'FormSection', icon: 'document' },
      { title: 'Graph', screen: 'Graph', icon: 'bar-chart' },
      { title: 'WebView', screen: 'WebView', icon: 'globe' },
    ] as CatalogItem[],
  },
];

export function CatalogListScreen({ navigation }: any) {
  const colors = useFluxColors();

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.screen}
      style={{ backgroundColor: colors.background }}
      renderSectionHeader={({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: colors.background }]}>
          <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>
            {section.title}
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <FluxListRow
          icon={{ type: 'ionicon', name: item.icon }}
          title={item.title}
          showChevron
          onPress={() => navigation.navigate(item.screen)}
        />
      )}
      stickySectionHeadersEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: FluxSpacing.md,
    paddingTop: FluxSpacing.lg,
    paddingBottom: FluxSpacing.xs,
  },
});
