import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxTextField } from '@flux-ds/react-native-foundation';

export function TextFieldShowcase() {
  const colors = useFluxColors();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} keyboardShouldPersistTaps="handled">
      <Text style={[FluxTypography.title3, { color: colors.textPrimary }]}>Basic</Text>
      <FluxTextField label="Name" placeholder="Enter your name" value={name} onChangeText={setName} style={{ marginTop: FluxSpacing.sm }} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>With Error</Text>
      <FluxTextField label="Email" placeholder="Enter email" value={email} onChangeText={setEmail} errorMessage={email.length > 0 && !email.includes('@') ? 'Invalid email address' : undefined} style={{ marginTop: FluxSpacing.sm }} />

      <Text style={[FluxTypography.title3, { color: colors.textPrimary, marginTop: FluxSpacing.lg }]}>Secure Entry</Text>
      <FluxTextField label="Password" placeholder="Enter password" value={password} onChangeText={setPassword} isSecure style={{ marginTop: FluxSpacing.sm }} />
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
