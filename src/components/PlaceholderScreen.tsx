import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme/tokens';

type IconName = ComponentProps<typeof Ionicons>['name'];

type PlaceholderScreenProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconName;
};

export function PlaceholderScreen({ eyebrow, title, description, icon }: PlaceholderScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 18 }]}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <View style={styles.content}>
        <View style={styles.iconSurface}>
          <Ionicons color={colors.brandGreenPressed} name={icon} size={30} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  eyebrow: {
    color: colors.textPrimary,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  content: {
    flex: 1,
    maxWidth: 360,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  iconSurface: {
    width: 64,
    height: 64,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.softGreen,
  },
  title: {
    marginTop: 20,
    color: colors.textPrimary,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
