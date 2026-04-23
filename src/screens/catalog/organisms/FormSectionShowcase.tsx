import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { FluxSpacing, FluxTypography, useFluxColors } from '@flux-ds/react-native-ds';
import { FluxFormSection, FluxTextField, FluxToggle } from '@flux-ds/react-native-foundation';

export function FormSectionShowcase() {
  const colors = useFluxColors();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [notifs, setNotifs] = useState(true);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} keyboardShouldPersistTaps="handled">
      <FluxFormSection title="Personal Information">
        <FluxTextField label="First Name" placeholder="John" value={first} onChangeText={setFirst} />
        <FluxTextField label="Last Name" placeholder="Doe" value={last} onChangeText={setLast} />
      </FluxFormSection>

      <FluxFormSection title="Contact" style={{ marginTop: FluxSpacing.lg }}>
        <FluxTextField label="Email" placeholder="john@example.com" value={email} onChangeText={setEmail} />
      </FluxFormSection>

      <FluxFormSection title="Preferences" style={{ marginTop: FluxSpacing.lg }}>
        <FluxToggle isOn={notifs} label="Enable Notifications" onToggle={setNotifs} />
      </FluxFormSection>
      <View style={{ height: FluxSpacing.xxl }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: FluxSpacing.md },
});
