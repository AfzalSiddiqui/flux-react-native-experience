import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { FluxSpacing, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxListRow } from '@flux-ds/react-native-foundation';

export function ExamplesListScreen({ navigation }: any) {
  const colors = useFluxColors();
  const examples = [
    { title: 'Login Flow', subtitle: 'Email/password form, loading, success', screen: 'LoginFlow', icon: 'log-in' },
    { title: 'Dashboard Flow', subtitle: 'Balance card, actions grid, transactions', screen: 'DashboardFlow', icon: 'speedometer' },
    { title: 'Payment Flow', subtitle: 'Recipient picker, amount, processing', screen: 'PaymentFlow', icon: 'card' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {examples.map((ex, i) => (
        <FluxListRow
          key={i}
          icon={{ type: 'ionicon', name: ex.icon }}
          title={ex.title}
          subtitle={ex.subtitle}
          showChevron
          onPress={() => navigation.navigate(ex.screen)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
