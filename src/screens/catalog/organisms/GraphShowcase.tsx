import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxGraph, FluxSegmentedControl } from '@flux-ds/react-native-foundation';

const sampleData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 28 },
  { label: 'Apr', value: 60 },
  { label: 'May', value: 42 },
];

const pieData = [
  { label: 'Food', value: 35, color: '#007AFF' },
  { label: 'Transport', value: 20, color: '#34C759' },
  { label: 'Shopping', value: 25, color: '#FF9500' },
  { label: 'Bills', value: 20, color: '#FF3B30' },
];

const chartTypes = ['bar', 'line', 'pie'] as const;

export function GraphShowcase() {
  const colors = useFluxColors();
  const [chartIdx, setChartIdx] = useState(0);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <FluxSegmentedControl
        items={['Bar', 'Line', 'Pie']}
        selectedIndex={chartIdx}
        onSelectionChanged={setChartIdx}
      />

      <View style={{ marginTop: FluxSpacing.lg }}>
        <FluxGraph
          chartType={chartTypes[chartIdx]}
          data={chartIdx === 2 ? pieData : sampleData}
          title={chartIdx === 2 ? 'Expenses Breakdown' : 'Monthly Revenue'}
          showLabels
          showValues
          animate
        />
      </View>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
