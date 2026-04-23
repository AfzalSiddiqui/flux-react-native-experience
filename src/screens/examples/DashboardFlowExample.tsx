import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { FluxSpacing, FluxShadow, FluxRadius, useFluxColors } from '@flux-ds/react-native-ds';
import {
  FluxText, FluxCard, FluxBoxGrid, FluxListRow, FluxDivider, FluxIcon,
} from '@flux-ds/react-native-foundation';

const quickActions = [
  { icon: { type: 'ionicon' as const, name: 'send' }, label: 'Send', color: '#007AFF' },
  { icon: { type: 'ionicon' as const, name: 'download' }, label: 'Request', color: '#34C759' },
  { icon: { type: 'ionicon' as const, name: 'card' }, label: 'Pay', color: '#FF9500' },
  { icon: { type: 'ionicon' as const, name: 'swap-horizontal' }, label: 'Transfer', color: '#5BC0BE' },
];

const transactions = [
  { title: 'Coffee Shop', subtitle: 'Today', amount: '-$4.50', icon: 'cafe' },
  { title: 'Salary Deposit', subtitle: 'Yesterday', amount: '+$3,200', icon: 'cash' },
  { title: 'Electric Bill', subtitle: 'Mar 20', amount: '-$85.00', icon: 'flash' },
  { title: 'Grocery Store', subtitle: 'Mar 19', amount: '-$62.30', icon: 'cart' },
  { title: 'Freelance Payment', subtitle: 'Mar 18', amount: '+$500', icon: 'briefcase' },
];

export function DashboardFlowExample() {
  const colors = useFluxColors();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <FluxText textStyle="subheadline" color={colors.textSecondary}>Welcome back</FluxText>
      <FluxText textStyle="largeTitle">Dashboard</FluxText>

      <FluxCard shadow={FluxShadow.medium} style={[styles.balanceCard, { backgroundColor: colors.primary }]}>
        <FluxText textStyle="subheadline" color="rgba(255,255,255,0.8)">Total Balance</FluxText>
        <FluxText textStyle="largeTitle" color="#FFFFFF" style={{ marginTop: FluxSpacing.xs }}>$12,450.00</FluxText>
        <View style={styles.balanceRow}>
          <View>
            <FluxText textStyle="caption" color="rgba(255,255,255,0.7)">Income</FluxText>
            <FluxText textStyle="headline" color="#FFFFFF">$3,700</FluxText>
          </View>
          <View>
            <FluxText textStyle="caption" color="rgba(255,255,255,0.7)">Expenses</FluxText>
            <FluxText textStyle="headline" color="#FFFFFF">$1,250</FluxText>
          </View>
        </View>
      </FluxCard>

      <FluxText textStyle="title3" style={{ marginTop: FluxSpacing.lg }}>Quick Actions</FluxText>
      <FluxBoxGrid items={quickActions} columns={4} itemSize="medium" style={{ marginTop: FluxSpacing.sm }} />

      <FluxText textStyle="title3" style={{ marginTop: FluxSpacing.lg }}>Recent Transactions</FluxText>
      <FluxCard style={{ marginTop: FluxSpacing.sm }}>
        {transactions.map((tx, i) => (
          <View key={i}>
            {i > 0 && <FluxDivider />}
            <FluxListRow
              icon={{ type: 'ionicon', name: tx.icon }}
              title={tx.title}
              subtitle={tx.subtitle}
            />
          </View>
        ))}
      </FluxCard>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
  balanceCard: { marginTop: FluxSpacing.md, padding: FluxSpacing.lg },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: FluxSpacing.md },
});
