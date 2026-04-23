import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import {
  FluxSpacing,
  FluxRadius,
  FluxTypography,
  FluxDefaultLightTheme,
  FluxDefaultDarkTheme,
  FluxDarkBrandTheme,
  useFluxTheme,
  useFluxColors,
  type ColorSchemePreference,
} from '@flux-ds/react-native-ds';
import { FluxSegmentedControl, FluxCard, FluxButton, FluxText } from '@flux-ds/react-native-foundation';

const schemeOptions: ColorSchemePreference[] = ['system', 'light', 'dark'];
const brandOptions = ['Default', 'Dark Brand'];

export function ThemeSettingsScreen() {
  const { colorSchemePreference, setColorSchemePreference, setThemeConfig, themeConfig } = useFluxTheme();
  const colors = useFluxColors();

  const schemeIdx = schemeOptions.indexOf(colorSchemePreference);
  const isDefaultBrand = themeConfig.light === FluxDefaultLightTheme;
  const brandIdx = isDefaultBrand ? 0 : 1;

  const handleSchemeChange = (idx: number) => {
    setColorSchemePreference(schemeOptions[idx]);
  };

  const handleBrandChange = (idx: number) => {
    if (idx === 0) {
      setThemeConfig({ light: FluxDefaultLightTheme, dark: FluxDefaultDarkTheme });
    } else {
      setThemeConfig({ light: FluxDarkBrandTheme, dark: FluxDarkBrandTheme });
    }
  };

  const colorPreview = [
    { label: 'Primary', color: colors.primary },
    { label: 'Secondary', color: colors.secondary },
    { label: 'Accent', color: colors.accent },
    { label: 'Success', color: colors.success },
    { label: 'Warning', color: colors.warning },
    { label: 'Error', color: colors.error },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[FluxTypography.largeTitle, { color: colors.textPrimary }]}>Theme</Text>
      <Text style={[FluxTypography.subheadline, { color: colors.textSecondary, marginTop: FluxSpacing.xxs }]}>
        Customize appearance
      </Text>

      <FluxCard style={{ marginTop: FluxSpacing.lg }}>
        <FluxText textStyle="headline">Color Scheme</FluxText>
        <FluxSegmentedControl
          items={['System', 'Light', 'Dark']}
          selectedIndex={schemeIdx}
          onSelectionChanged={handleSchemeChange}
          style={{ marginTop: FluxSpacing.sm }}
        />
      </FluxCard>

      <FluxCard style={{ marginTop: FluxSpacing.md }}>
        <FluxText textStyle="headline">Brand Theme</FluxText>
        <FluxSegmentedControl
          items={brandOptions}
          selectedIndex={brandIdx}
          onSelectionChanged={handleBrandChange}
          style={{ marginTop: FluxSpacing.sm }}
        />
      </FluxCard>

      <FluxCard style={{ marginTop: FluxSpacing.md }}>
        <FluxText textStyle="headline">Color Preview</FluxText>
        <View style={styles.colorGrid}>
          {colorPreview.map((c) => (
            <View key={c.label} style={styles.colorItem}>
              <View style={[styles.colorDot, { backgroundColor: c.color }]} />
              <Text style={[FluxTypography.caption, { color: colors.textSecondary }]}>{c.label}</Text>
            </View>
          ))}
        </View>
      </FluxCard>

      <FluxCard style={{ marginTop: FluxSpacing.md }}>
        <FluxText textStyle="headline">Live Preview</FluxText>
        <View style={{ marginTop: FluxSpacing.sm, gap: FluxSpacing.sm }}>
          <FluxButton title="Primary Action" onPress={() => {}} />
          <FluxButton title="Secondary Action" variant="secondary" onPress={() => {}} />
          <FluxButton title="Destructive" variant="destructive" onPress={() => {}} />
        </View>
      </FluxCard>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: FluxSpacing.sm,
    marginTop: FluxSpacing.sm,
  },
  colorItem: { alignItems: 'center' },
  colorDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
