import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HarvestCard } from '../components/HarvestCard';
import { harvests } from '../data/harvests';
import { colors, radii, spacing } from '../theme/tokens';

const filters = ['전체', '오늘 수확', '가까운 순', '나눔', '교환'] as const;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]>('전체');
  const visibleHarvests = useMemo(() => {
    switch (selectedFilter) {
      case '오늘 수확':
        return harvests.filter(
          (item) => item.harvestedAt.includes('오늘') || item.harvestedAt === '방금 수확',
        );
      case '가까운 순':
        return [...harvests].sort(
          (first, second) => Number.parseFloat(first.distance) - Number.parseFloat(second.distance),
        );
      case '나눔':
        return harvests.filter((item) => item.kind === 'giveaway');
      case '교환':
        return harvests.filter((item) => item.kind === 'exchange');
      default:
        return harvests;
    }
  }, [selectedFilter]);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 118 },
      ]}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={styles.screen}
    >
      <View style={styles.readingColumn}>
        <View style={styles.header}>
          <View style={styles.brandGroup}>
            <Text style={styles.brand}>따옴</Text>
            <Pressable
              accessibilityHint="동네 선택은 다음 단계에서 연결돼요"
              accessibilityLabel="현재 동네 갈매동"
              accessibilityRole="button"
              onPress={() => Alert.alert('우리 동네', '현재는 갈매동의 mock 수확물을 보여드려요.')}
              style={({ pressed }) => [styles.locationButton, pressed && styles.pressed]}
            >
              <Ionicons color={colors.brandGreenPressed} name="location-outline" size={15} />
              <Text style={styles.locationButtonText}>갈매동</Text>
              <Ionicons color={colors.textSecondary} name="chevron-down" size={14} />
            </Pressable>
          </View>

          <View style={styles.headerActions}>
            <Pressable
              accessibilityLabel="검색"
              accessibilityRole="button"
              onPress={() => Alert.alert('검색', '검색 기능은 다음 단계에서 연결할 예정이에요.')}
              style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
            >
              <Ionicons color={colors.textPrimary} name="search-outline" size={23} />
            </Pressable>
            <Pressable
              accessibilityLabel="알림"
              accessibilityRole="button"
              onPress={() => Alert.alert('알림', '새 수확 알림은 다음 단계에서 연결할 예정이에요.')}
              style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
            >
              <Ionicons color={colors.textPrimary} name="notifications-outline" size={23} />
              <View style={styles.notificationDot} />
            </Pressable>
          </View>
        </View>

        <View style={styles.intro}>
          <Text style={styles.title}>오늘 뭐가 따였을까요?</Text>
          <Text style={styles.subtitle}>우리 동네에서 새로 올라온 수확이에요.</Text>
        </View>
      </View>

      <ScrollView
        accessibilityLabel="수확물 필터"
        contentContainerStyle={styles.filterContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
      >
        {filters.map((filter) => {
          const selected = filter === selectedFilter;

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected }}
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              style={({ pressed }) => [
                styles.filter,
                selected && styles.selectedFilter,
                pressed && styles.pressedFilter,
              ]}
            >
              <Text style={[styles.filterText, selected && styles.selectedFilterText]}>{filter}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={[styles.readingColumn, styles.feed]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>오늘의 수확</Text>
          <Text style={styles.sectionMeta}>갈매동 주변 {visibleHarvests.length}개</Text>
        </View>

        <View>
          {visibleHarvests.map((item, index) => (
            <HarvestCard isLast={index === visibleHarvests.length - 1} item={item} key={item.id} />
          ))}
        </View>

        <Text style={styles.feedEnd}>가까운 이웃의 다음 수확도 곧 만나요.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flexGrow: 1,
  },
  readingColumn: {
    width: '100%',
    maxWidth: 620,
    alignSelf: 'center',
    paddingHorizontal: spacing.xl,
  },
  header: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brand: {
    color: colors.textPrimary,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '800',
    letterSpacing: -0.7,
  },
  locationButton: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 4,
  },
  locationButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.48,
    backgroundColor: colors.divider,
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.background,
    backgroundColor: colors.harvestCoral,
  },
  intro: {
    marginTop: 20,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  subtitle: {
    marginTop: 5,
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  filterScroll: {
    marginTop: 24,
    flexGrow: 0,
  },
  filterContent: {
    gap: 8,
    paddingHorizontal: 20,
  },
  filter: {
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: radii.capsule,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(35, 38, 32, 0.07)',
    backgroundColor: 'rgba(255, 255, 255, 0.66)',
  },
  selectedFilter: {
    borderColor: 'rgba(93, 138, 85, 0.14)',
    backgroundColor: colors.softGreen,
  },
  pressedFilter: {
    opacity: 0.58,
  },
  filterText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  selectedFilterText: {
    color: colors.brandGreenPressed,
    fontWeight: '700',
  },
  feed: {
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 2,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  sectionMeta: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  feedEnd: {
    marginTop: 14,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
