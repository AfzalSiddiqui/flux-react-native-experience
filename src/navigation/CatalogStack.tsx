import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFluxColors } from '@anthropic-flux/react-native-ds';
import { CatalogListScreen } from '../screens/catalog/CatalogListScreen';
import { ColorsShowcase } from '../screens/catalog/tokens/ColorsShowcase';
import { TypographyShowcase } from '../screens/catalog/tokens/TypographyShowcase';
import { SpacingShowcase } from '../screens/catalog/tokens/SpacingShowcase';
import { RadiusShowcase } from '../screens/catalog/tokens/RadiusShowcase';
import { ShadowsShowcase } from '../screens/catalog/tokens/ShadowsShowcase';
import { ButtonShowcase } from '../screens/catalog/atoms/ButtonShowcase';
import { TextShowcase } from '../screens/catalog/atoms/TextShowcase';
import { AttributedTextShowcase } from '../screens/catalog/atoms/AttributedTextShowcase';
import { IconShowcase } from '../screens/catalog/atoms/IconShowcase';
import { ImageShowcase } from '../screens/catalog/atoms/ImageShowcase';
import { LoaderShowcase } from '../screens/catalog/atoms/LoaderShowcase';
import { DividerShowcase } from '../screens/catalog/atoms/DividerShowcase';
import { CheckBoxShowcase } from '../screens/catalog/atoms/CheckBoxShowcase';
import { RadioButtonShowcase } from '../screens/catalog/atoms/RadioButtonShowcase';
import { ToggleShowcase } from '../screens/catalog/atoms/ToggleShowcase';
import { SegmentedControlShowcase } from '../screens/catalog/atoms/SegmentedControlShowcase';
import { ShimmerShowcase } from '../screens/catalog/atoms/ShimmerShowcase';
import { CardShowcase } from '../screens/catalog/molecules/CardShowcase';
import { TextFieldShowcase } from '../screens/catalog/molecules/TextFieldShowcase';
import { ListRowShowcase } from '../screens/catalog/molecules/ListRowShowcase';
import { AlertViewShowcase } from '../screens/catalog/molecules/AlertViewShowcase';
import { InfoViewShowcase } from '../screens/catalog/molecules/InfoViewShowcase';
import { OptionCardShowcase } from '../screens/catalog/molecules/OptionCardShowcase';
import { ExpandableViewShowcase } from '../screens/catalog/molecules/ExpandableViewShowcase';
import { FlapViewShowcase } from '../screens/catalog/molecules/FlapViewShowcase';
import { CardFlapShowcase } from '../screens/catalog/molecules/CardFlapShowcase';
import { BoxGridShowcase } from '../screens/catalog/molecules/BoxGridShowcase';
import { HeaderShowcase } from '../screens/catalog/organisms/HeaderShowcase';
import { BottomSheetShowcase } from '../screens/catalog/organisms/BottomSheetShowcase';
import { FormSectionShowcase } from '../screens/catalog/organisms/FormSectionShowcase';
import { GraphShowcase } from '../screens/catalog/organisms/GraphShowcase';
import { WebViewShowcase } from '../screens/catalog/organisms/WebViewShowcase';

const Stack = createNativeStackNavigator();

export function CatalogStack() {
  const colors = useFluxColors();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="CatalogList" component={CatalogListScreen} options={{ title: 'Catalog' }} />
      <Stack.Screen name="Colors" component={ColorsShowcase} />
      <Stack.Screen name="Typography" component={TypographyShowcase} />
      <Stack.Screen name="Spacing" component={SpacingShowcase} />
      <Stack.Screen name="Radius" component={RadiusShowcase} />
      <Stack.Screen name="Shadows" component={ShadowsShowcase} />
      <Stack.Screen name="Button" component={ButtonShowcase} />
      <Stack.Screen name="Text" component={TextShowcase} />
      <Stack.Screen name="AttributedText" component={AttributedTextShowcase} />
      <Stack.Screen name="Icon" component={IconShowcase} />
      <Stack.Screen name="Image" component={ImageShowcase} />
      <Stack.Screen name="Loader" component={LoaderShowcase} />
      <Stack.Screen name="Divider" component={DividerShowcase} />
      <Stack.Screen name="CheckBox" component={CheckBoxShowcase} />
      <Stack.Screen name="RadioButton" component={RadioButtonShowcase} />
      <Stack.Screen name="Toggle" component={ToggleShowcase} />
      <Stack.Screen name="SegmentedControl" component={SegmentedControlShowcase} />
      <Stack.Screen name="Shimmer" component={ShimmerShowcase} />
      <Stack.Screen name="Card" component={CardShowcase} />
      <Stack.Screen name="TextField" component={TextFieldShowcase} />
      <Stack.Screen name="ListRow" component={ListRowShowcase} />
      <Stack.Screen name="AlertView" component={AlertViewShowcase} />
      <Stack.Screen name="InfoView" component={InfoViewShowcase} />
      <Stack.Screen name="OptionCard" component={OptionCardShowcase} />
      <Stack.Screen name="ExpandableView" component={ExpandableViewShowcase} />
      <Stack.Screen name="FlapView" component={FlapViewShowcase} />
      <Stack.Screen name="CardFlap" component={CardFlapShowcase} />
      <Stack.Screen name="BoxGrid" component={BoxGridShowcase} />
      <Stack.Screen name="Header" component={HeaderShowcase} />
      <Stack.Screen name="BottomSheet" component={BottomSheetShowcase} />
      <Stack.Screen name="FormSection" component={FormSectionShowcase} />
      <Stack.Screen name="Graph" component={GraphShowcase} />
      <Stack.Screen name="WebView" component={WebViewShowcase} />
    </Stack.Navigator>
  );
}
