import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { FluxSpacing, FluxRadius, useFluxColors } from '@flux-ds/react-native-ds';
import {
  FluxText, FluxTextField, FluxButton, FluxCard,
  FluxAlertView, FluxLoader, FluxIcon,
} from '@flux-ds/react-native-foundation';

type LoginState = 'idle' | 'loading' | 'success' | 'error';

export function LoginFlowExample() {
  const colors = useFluxColors();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState<LoginState>('idle');

  const handleLogin = () => {
    setState('loading');
    setTimeout(() => {
      if (email.includes('@') && password.length >= 6) {
        setState('success');
      } else {
        setState('error');
      }
    }, 2000);
  };

  const reset = () => {
    setState('idle');
    setEmail('');
    setPassword('');
  };

  if (state === 'success') {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <FluxIcon source={{ type: 'ionicon', name: 'checkmark-circle' }} size="large" color={colors.success} />
        <FluxText textStyle="title2" style={{ marginTop: FluxSpacing.md }}>Welcome!</FluxText>
        <FluxText textStyle="body" color={colors.textSecondary} style={{ marginTop: FluxSpacing.xs }}>
          Login successful
        </FluxText>
        <FluxButton title="Start Over" variant="secondary" onPress={reset} style={{ marginTop: FluxSpacing.xl, width: 200 }} />
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <FluxText textStyle="largeTitle" style={{ textAlign: 'center' }}>Log In</FluxText>
      <FluxText textStyle="subheadline" color={colors.textSecondary} style={{ textAlign: 'center', marginTop: FluxSpacing.xs }}>
        Welcome back to Flux
      </FluxText>

      <FluxCard style={{ marginTop: FluxSpacing.xl }}>
        <FluxTextField label="Email" placeholder="you@example.com" value={email} onChangeText={setEmail} />
        <View style={{ height: FluxSpacing.md }} />
        <FluxTextField label="Password" placeholder="Min 6 characters" value={password} onChangeText={setPassword} isSecure />
      </FluxCard>

      {state === 'error' && (
        <FluxAlertView
          variant="error"
          title="Login Failed"
          message="Please check your email and password."
          isDismissible
          onDismiss={() => setState('idle')}
          style={{ marginTop: FluxSpacing.md }}
        />
      )}

      <FluxButton
        title={state === 'loading' ? '' : 'Log In'}
        isLoading={state === 'loading'}
        isDisabled={!email || !password}
        onPress={handleLogin}
        style={{ marginTop: FluxSpacing.lg }}
      />

      <FluxButton
        title="Forgot Password?"
        variant="secondary"
        onPress={() => {}}
        style={{ marginTop: FluxSpacing.sm }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: FluxSpacing.md, paddingTop: FluxSpacing.xl },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: FluxSpacing.md },
});
