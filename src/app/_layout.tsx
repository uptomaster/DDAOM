import { BlurTargetView } from 'expo-blur';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FloatingTabBar } from '../components/FloatingTabBar';
import { colors } from '../theme/tokens';

export default function RootLayout() {
  const blurTarget = useRef<View | null>(null);

  return (
    <SafeAreaProvider>
      <View style={styles.shell}>
        <BlurTargetView ref={blurTarget} style={styles.content}>
          <Slot />
        </BlurTargetView>
        <FloatingTabBar blurTarget={blurTarget} />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
