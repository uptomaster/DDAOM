import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { router, usePathname } from 'expo-router';
import type { ComponentProps, RefObject } from 'react';
import { Platform, Pressable, StyleSheet, Text, View, type View as NativeView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, radii } from '../theme/tokens';

type IconName = ComponentProps<typeof Ionicons>['name'];

type FloatingTabBarProps = {
  blurTarget: RefObject<NativeView | null>;
};

const tabs = [
  { label: '홈', href: '/', icon: 'home-outline', activeIcon: 'home' },
  { label: '동네', href: '/neighborhood', icon: 'people-outline', activeIcon: 'people' },
  { label: '올리기', href: '/upload', icon: 'add', activeIcon: 'add' },
  { label: '채팅', href: '/chats', icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
  { label: '내 텃밭', href: '/garden', icon: 'leaf-outline', activeIcon: 'leaf' },
] as const satisfies readonly {
  label: string;
  href: '/' | '/neighborhood' | '/upload' | '/chats' | '/garden';
  icon: IconName;
  activeIcon: IconName;
}[];

export function FloatingTabBar({ blurTarget }: FloatingTabBarProps) {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View pointerEvents="box-none" style={[styles.positioner, { bottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.shadow}>
        <View style={styles.clip}>
          <BlurView
            blurMethod={Platform.OS === 'android' ? 'dimezisBlurViewSdk31Plus' : undefined}
            blurTarget={blurTarget}
            intensity={58}
            style={StyleSheet.absoluteFill}
            tint="systemUltraThinMaterialLight"
          />
          <View pointerEvents="none" style={styles.glassTint} />
          <View pointerEvents="none" style={styles.highlight} />

          <View accessibilityRole="tablist" style={styles.items}>
            {tabs.map((tab) => {
              const selected = pathname === tab.href;
              const isUpload = tab.href === '/upload';

              return (
                <Pressable
                  accessibilityLabel={tab.label}
                  accessibilityRole="tab"
                  accessibilityState={{ selected }}
                  hitSlop={{ top: 4, bottom: 4 }}
                  key={tab.href}
                  onPress={() => router.navigate(tab.href)}
                  style={({ pressed }) => [styles.item, pressed && styles.pressed]}
                >
                  <View
                    style={[
                      styles.iconWrap,
                      selected && styles.selectedIconWrap,
                      isUpload && styles.uploadIconWrap,
                      isUpload && selected && styles.uploadIconWrapSelected,
                    ]}
                  >
                    <Ionicons
                      color={selected || isUpload ? colors.brandGreenPressed : colors.textSecondary}
                      name={selected ? tab.activeIcon : tab.icon}
                      size={isUpload ? 26 : 21}
                    />
                  </View>
                  <Text numberOfLines={1} style={[styles.label, selected && styles.selectedLabel]}>
                    {tab.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  positioner: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  shadow: {
    width: '100%',
    maxWidth: 520,
    height: 74,
    borderRadius: 29,
    shadowColor: '#1D2B1A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.11,
    shadowRadius: 18,
    elevation: 8,
  },
  clip: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 29,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.glassBorder,
    backgroundColor: 'rgba(250, 250, 248, 0.58)',
  },
  glassTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.glassTint,
  },
  highlight: {
    position: 'absolute',
    left: 22,
    right: 22,
    top: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.glassHighlight,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  item: {
    flex: 1,
    minWidth: 56,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  pressed: {
    opacity: 0.55,
    transform: [{ scale: 0.97 }],
  },
  iconWrap: {
    width: 36,
    height: 31,
    borderRadius: radii.capsule,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIconWrap: {
    backgroundColor: 'rgba(93, 138, 85, 0.12)',
  },
  uploadIconWrap: {
    width: 42,
    height: 36,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(93, 138, 85, 0.28)',
    backgroundColor: 'rgba(237, 244, 234, 0.84)',
  },
  uploadIconWrapSelected: {
    backgroundColor: 'rgba(222, 237, 216, 0.95)',
    borderColor: 'rgba(93, 138, 85, 0.36)',
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: -0.2,
  },
  selectedLabel: {
    color: colors.brandGreenPressed,
    fontWeight: '700',
  },
});
