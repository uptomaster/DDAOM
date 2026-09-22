import type { ImageSourcePropType } from 'react-native';

export type HarvestKind = 'sale' | 'giveaway' | 'exchange';

export type HarvestItem = {
  id: string;
  title: string;
  value: string;
  tradeLabel: string;
  kind: HarvestKind;
  harvestedAt: string;
  neighborhood: string;
  distance: string;
  garden: string;
  image: ImageSourcePropType;
};

export const harvests: HarvestItem[] = [
  {
    id: 'tomatoes',
    title: '방울토마토 한 바구니',
    value: '3,000원',
    tradeLabel: '판매',
    kind: 'sale',
    harvestedAt: '오늘 오전 수확',
    neighborhood: '갈매동',
    distance: '0.8km',
    garden: '순자네 텃밭',
    image: require('../../assets/harvest/tomatoes.jpg'),
  },
  {
    id: 'lettuce',
    title: '상추 한 봉지',
    value: '나눔',
    tradeLabel: '무료 나눔',
    kind: 'giveaway',
    harvestedAt: '방금 수확',
    neighborhood: '인창동',
    distance: '1.2km',
    garden: '행복 텃밭',
    image: require('../../assets/harvest/lettuce.jpg'),
  },
  {
    id: 'peppers',
    title: '청양고추',
    value: '감자와 교환',
    tradeLabel: '교환',
    kind: 'exchange',
    harvestedAt: '오늘 수확',
    neighborhood: '갈매동',
    distance: '1.6km',
    garden: '주말농장 3번밭',
    image: require('../../assets/harvest/peppers.jpg'),
  },
  {
    id: 'cucumbers',
    title: '오이 5개',
    value: '2,500원',
    tradeLabel: '판매',
    kind: 'sale',
    harvestedAt: '어제 수확',
    neighborhood: '별내동',
    distance: '2.1km',
    garden: '정희네 텃밭',
    image: require('../../assets/harvest/cucumbers.jpg'),
  },
];
