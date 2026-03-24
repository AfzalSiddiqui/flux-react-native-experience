# flux-react-native-experience

**Live interactive showcase app — 42 screens demonstrating every Flux component, token, and pattern.**

`flux-react-native-experience` is an Expo-powered React Native app that serves as both a component catalog and integration reference for the Flux Design System. It demonstrates all 26 components, 5 token categories, 3 real-world example flows, design guidelines, and live theme switching.

**32 showcases | 3 example flows | 4-tab navigation | Live theme switching**

---

## Features

- **Component Catalog** — Every Flux component with interactive demos
- **Token Showcases** — Visual reference for colors, typography, spacing, radius, shadows
- **Example Flows** — Login, Dashboard, and Payment real-world patterns
- **Design Guidelines** — Do's and Don'ts for 5 categories
- **Live Theme Switching** — System/Light/Dark mode + Default/Brand themes
- **Expo SDK** — Quick setup with `npx expo start`

---

## Quick Start

```bash
cd flux-react-native-experience
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS/Android) or press `i` for iOS simulator / `a` for Android emulator.

---

## App Structure

The app uses a **4-tab Bottom Tab Navigator**:

```
+-----------------------------------------------+
|  flux-react-native-experience                  |
|  +-------------------------------------------+ |
|  | Tab 1: Catalog                            | |
|  |   Tokens > Colors, Typography, Spacing,   | |
|  |           Radius, Shadows                  | |
|  |   Atoms  > Button, Text, AttributedText,  | |
|  |           Icon, Image, Loader, Divider,    | |
|  |           CheckBox, RadioButton, Toggle,   | |
|  |           SegmentedControl, Shimmer        | |
|  |   Molecules > Card, TextField, ListRow,    | |
|  |           AlertView, InfoView, OptionCard, | |
|  |           ExpandableView, FlapView,        | |
|  |           CardFlap, BoxGrid               | |
|  |   Organisms > Header, BottomSheet,         | |
|  |           FormSection, Graph, WebView      | |
|  +-------------------------------------------+ |
|  | Tab 2: Examples                            | |
|  |   Login Flow | Dashboard Flow | Payment   | |
|  +-------------------------------------------+ |
|  | Tab 3: Guidelines                          | |
|  |   Do's & Don'ts for Colors, Typography,   | |
|  |   Spacing, Components, Accessibility       | |
|  +-------------------------------------------+ |
|  | Tab 4: Theme                               | |
|  |   Color Scheme: [System] [Light] [Dark]    | |
|  |   Brand: [Default] [Dark Brand]            | |
|  |   Live color preview swatches              | |
|  +-------------------------------------------+ |
|  |  [Catalog] [Examples] [Guidelines] [Theme] | |
|  +-------------------------------------------+ |
+-----------------------------------------------+
```

---

## Navigation

| Navigator | Type | Screens |
|-----------|------|---------|
| Root | Bottom Tab | Catalog, Examples, Guidelines, Theme |
| CatalogStack | Native Stack | CatalogList + 32 showcase screens |
| ExamplesStack | Native Stack | ExamplesList + 3 example flows |

---

## All 42 Screens

### Tab 1: Catalog

#### Token Showcases (5)

| # | Screen | Demonstrates |
|---|--------|-------------|
| 1 | ColorsShowcase | All 16 semantic color tokens with swatches |
| 2 | TypographyShowcase | All 10 text styles with live samples |
| 3 | SpacingShowcase | 8 spacing values with visual bars |
| 4 | RadiusShowcase | 6 radius presets with rounded boxes |
| 5 | ShadowsShowcase | 3 shadow elevations side by side |

#### Atom Showcases (12)

| # | Screen | Component | Demonstrates |
|---|--------|-----------|-------------|
| 6 | ButtonShowcase | FluxButton | 3 variants, 3 sizes, loading, disabled |
| 7 | TextShowcase | FluxText | All 11 text styles |
| 8 | AttributedTextShowcase | FluxText | Bold, italic, underline, colors |
| 9 | IconShowcase | FluxIcon | Ionicons, sizes, colors |
| 10 | ImageShowcase | FluxImage | Sources, sizes, borders, loading states |
| 11 | LoaderShowcase | FluxLoader | Spinner, progress bar, 3 sizes |
| 12 | DividerShowcase | FluxDivider | H/V orientation, thickness, colors |
| 13 | CheckBoxShowcase | FluxCheckBox | Filled/outlined, sizes, animated |
| 14 | RadioButtonShowcase | FluxRadioButton | Single-select groups, sizes |
| 15 | ToggleShowcase | FluxToggle | Native switch, labels, tint colors |
| 16 | SegmentedControlShowcase | FluxSegmentedControl | Filled/outlined, sizes |
| 17 | ShimmerShowcase | FluxShimmer | Shapes, text block, card skeleton |

#### Molecule Showcases (10)

| # | Screen | Component | Demonstrates |
|---|--------|-----------|-------------|
| 18 | CardShowcase | FluxCard | Padding, radius, shadow variations |
| 19 | TextFieldShowcase | FluxTextField | Label, placeholder, secure, errors |
| 20 | ListRowShowcase | FluxListRow | Icon, title, subtitle, chevron, tap |
| 21 | AlertViewShowcase | FluxAlertView | Info/success/warning/error, dismiss |
| 22 | InfoViewShowcase | FluxInfoView | Horizontal/vertical layouts |
| 23 | OptionCardShowcase | FluxOptionCard | Single/multi selection |
| 24 | ExpandableViewShowcase | FluxExpandableView | Card/plain/bordered styles |
| 25 | FlapViewShowcase | FluxFlapView | Underlined/filled/pill tabs |
| 26 | CardFlapShowcase | FluxCardFlap | 3D flip animation |
| 27 | BoxGridShowcase | FluxBoxGrid | Columns, selection modes, sizes |

#### Organism Showcases (5)

| # | Screen | Component | Demonstrates |
|---|--------|-----------|-------------|
| 28 | HeaderShowcase | FluxHeader | Title, subtitle, action buttons |
| 29 | BottomSheetShowcase | FluxBottomSheet | 3 detents, drag-to-dismiss |
| 30 | FormSectionShowcase | FluxFormSection | Grouped form fields |
| 31 | GraphShowcase | FluxGraph | Bar, line, pie charts |
| 32 | WebViewShowcase | FluxWebView | URL loading, progress, errors |

### Tab 2: Examples (3 Flows)

| # | Screen | Demonstrates |
|---|--------|-------------|
| 33 | ExamplesListScreen | Flow selection list |
| 34 | LoginFlowExample | Email/password form, validation, loading state, success overlay |
| 35 | DashboardFlowExample | Balance card, quick action grid, transaction list |
| 36 | PaymentFlowExample | Recipient picker, amount input, processing state |

### Tab 3: Guidelines

| # | Screen | Demonstrates |
|---|--------|-------------|
| 37 | DosAndDontsScreen | 5 guideline sections with green/red indicators |

**Guideline Categories:**
- **Colors** — Use semantic tokens, support light/dark
- **Typography** — Use FluxTypography, support Dynamic Type
- **Spacing** — Use FluxSpacing tokens, stay consistent
- **Components** — Use Flux components, compose molecules from atoms
- **Accessibility** — 4.5:1 contrast ratio, labels on interactive elements

### Tab 4: Theme

| # | Screen | Demonstrates |
|---|--------|-------------|
| 38 | ThemeSettingsScreen | Color scheme picker, brand picker, live preview |

**Features:**
- Segmented control: System / Light / Dark
- Brand switcher: Default / Dark Brand
- Live color swatches: primary, secondary, accent, success, warning, error
- Button preview: Primary, Secondary, Destructive actions

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `expo` (SDK 52) | App framework |
| `@react-navigation/native` | Navigation container |
| `@react-navigation/bottom-tabs` | Bottom tab navigator |
| `@react-navigation/native-stack` | Stack navigator |
| `@expo/vector-icons` | Ionicons for tab bar |
| `@anthropic-flux/react-native-ds` | Design tokens & theme |
| `@anthropic-flux/react-native-foundation` | UI components |
| `@anthropic-flux/react-native-assets` | Strings, icons, i18n |

---

## File Structure

```
flux-react-native-experience/
|-- package.json
|-- app.json
|-- tsconfig.json
|-- babel.config.js
|-- App.tsx                                    (Root: ThemeProvider + I18nProvider + Navigation)
|-- LICENSE
|-- README.md
+-- src/
    |-- navigation/
    |   |-- CatalogStack.tsx                   (Stack navigator, 33 screens)
    |   +-- ExamplesStack.tsx                  (Stack navigator, 4 screens)
    +-- screens/
        |-- catalog/
        |   |-- CatalogListScreen.tsx          (SectionList: Tokens/Atoms/Molecules/Organisms)
        |   |-- tokens/
        |   |   |-- ColorsShowcase.tsx
        |   |   |-- TypographyShowcase.tsx
        |   |   |-- SpacingShowcase.tsx
        |   |   |-- RadiusShowcase.tsx
        |   |   +-- ShadowsShowcase.tsx
        |   |-- atoms/
        |   |   |-- ButtonShowcase.tsx
        |   |   |-- TextShowcase.tsx
        |   |   |-- AttributedTextShowcase.tsx
        |   |   |-- IconShowcase.tsx
        |   |   |-- ImageShowcase.tsx
        |   |   |-- LoaderShowcase.tsx
        |   |   |-- DividerShowcase.tsx
        |   |   |-- CheckBoxShowcase.tsx
        |   |   |-- RadioButtonShowcase.tsx
        |   |   |-- ToggleShowcase.tsx
        |   |   |-- SegmentedControlShowcase.tsx
        |   |   +-- ShimmerShowcase.tsx
        |   |-- molecules/
        |   |   |-- CardShowcase.tsx
        |   |   |-- TextFieldShowcase.tsx
        |   |   |-- ListRowShowcase.tsx
        |   |   |-- AlertViewShowcase.tsx
        |   |   |-- InfoViewShowcase.tsx
        |   |   |-- OptionCardShowcase.tsx
        |   |   |-- ExpandableViewShowcase.tsx
        |   |   |-- FlapViewShowcase.tsx
        |   |   |-- CardFlapShowcase.tsx
        |   |   +-- BoxGridShowcase.tsx
        |   +-- organisms/
        |       |-- HeaderShowcase.tsx
        |       |-- BottomSheetShowcase.tsx
        |       |-- FormSectionShowcase.tsx
        |       |-- GraphShowcase.tsx
        |       +-- WebViewShowcase.tsx
        |-- examples/
        |   |-- ExamplesListScreen.tsx
        |   |-- LoginFlowExample.tsx
        |   |-- DashboardFlowExample.tsx
        |   +-- PaymentFlowExample.tsx
        |-- guidelines/
        |   +-- DosAndDontsScreen.tsx
        +-- theme/
            +-- ThemeSettingsScreen.tsx
```

---

## License

MIT License - Copyright (c) 2026 Afzal Siddiqui
