import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFluxColors } from '@anthropic-flux/react-native-ds';
import { ExamplesListScreen } from '../screens/examples/ExamplesListScreen';
import { LoginFlowExample } from '../screens/examples/LoginFlowExample';
import { DashboardFlowExample } from '../screens/examples/DashboardFlowExample';
import { PaymentFlowExample } from '../screens/examples/PaymentFlowExample';

const Stack = createNativeStackNavigator();

export function ExamplesStack() {
  const colors = useFluxColors();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="ExamplesList" component={ExamplesListScreen} options={{ title: 'Examples' }} />
      <Stack.Screen name="LoginFlow" component={LoginFlowExample} options={{ title: 'Login Flow' }} />
      <Stack.Screen name="DashboardFlow" component={DashboardFlowExample} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="PaymentFlow" component={PaymentFlowExample} options={{ title: 'Payment' }} />
    </Stack.Navigator>
  );
}
