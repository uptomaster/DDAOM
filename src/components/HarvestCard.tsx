import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { HarvestItem } from '../data/harvests';
import { colors, radii, spacing } from '../theme/tokens';

type HarvestCardProps = {
  item: HarvestItem;
  isLast?: boolean;
};

export function HarvestCard({ item, isLast = false }: HarvestCardProps) {
  const valueColor = item.kind === 'giveaway' ? colors.harvestCoral : colors.textPrimary;

  return (
    <View
      accessibilityLabel={`${item.title}, ${item.value}, ${item.harvestedAt}, ${item.neighborhood} ${item.distance}, ${item.garden}`}
      style={[styles.container, isLast && styles.lastContainer]}
    >
      <Image accessibilityIgnoresInvertColors source={item.image} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Pressable
            accessibilityLabel={`${item.title} 찜하기`}
            accessibilityRole="button"
            hitSlop={8}
            style={({ pressed }) => [styles.heartButton, pressed && styles.pressed]}
          >
            <Ionicons color={colors.textSecondary} name="heart-outline" size={22} />
          </Pressable>
        </View>

        <View style={styles.valueRow}>
          <Text style={[styles.value, { color: valueColor }]}>{item.value}</Text>
          <Text style={styles.tradeLabel}>{item.tradeLabel}</Text>
        </View>

        <View style={styles.harvestRow}>
          <View style={styles.harvestDot} />
          <Text style={styles.harvestedAt}>{item.harvestedAt}</Text>
        </View>

        <Text style={styles.location}>
          {item.neighborhood} · {item.distance}
        </Text>
        <Text numberOfLines={1} style={styles.garden}>
          {item.garden}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 18,
    borderBottomColor: colors.divider,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  lastContainer: {
    borderBottomWidth: 0,
  },
  image: {
    width: 124,
    height: 124,
    borderRadius: radii.large,
    backgroundColor: colors.divider,
  },
  content: {
    flex: 1,
    minHeight: 124,
  },
  titleRow: {
    minHeight: 27,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  title: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '600',
    letterSpacing: -0.25,
  },
  heartButton: {
    width: 32,
    height: 32,
    marginRight: -5,
    marginTop: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.45,
  },
  valueRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 7,
  },
  value: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '700',
    letterSpacing: -0.25,
    fontVariant: ['tabular-nums'],
  },
  tradeLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  harvestRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  harvestDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.brandGreen,
  },
  harvestedAt: {
    color: colors.brandGreenPressed,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  location: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  garden: {
    marginTop: 4,
    color: colors.textPrimary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
});
