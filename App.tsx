import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FluxThemeProvider, useFluxTheme } from '@anthropic-flux/react-native-ds';
import { FluxI18nProvider } from '@anthropic-flux/react-native-assets';
import { CatalogStack } from './src/navigation/CatalogStack';
import { ExamplesStack } from './src/navigation/ExamplesStack';
import { GuidelinesScreen } from './src/screens/guidelines/DosAndDontsScreen';
import { ThemeSettingsScreen } from './src/screens/theme/ThemeSettingsScreen';

const Tab = createBottomTabNavigator();

function AppTabs() {
  const { theme, colorScheme } = useFluxTheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarStyle: { backgroundColor: theme.surface },
        }}
      >
        <Tab.Screen
          name="Catalog"
          component={CatalogStack}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="grid" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Examples"
          component={ExamplesStack}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="flask" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Guidelines"
          component={GuidelinesScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Theme"
          component={ThemeSettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="color-palette" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <FluxThemeProvider>
      <FluxI18nProvider>
        <NavigationContainer>
          <AppTabs />
        </NavigationContainer>
      </FluxI18nProvider>
    </FluxThemeProvider>
  );
}
