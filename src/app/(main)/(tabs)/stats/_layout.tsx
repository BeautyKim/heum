import { Href, Slot, usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import SegmentedControl from '@/components/common/SegmentedControl';

const STATS_TIME_OPTIONS: { label: string; path: Href }[] = [
  { label: 'Week', path: '/stats' },
  { label: 'Month', path: '/stats/month' },
  { label: 'Year', path: '/stats/year' },
];

export default function StatsLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 현재 경로 기반으로 기본 선택값 설정
  useEffect(() => {
    const foundIndex = STATS_TIME_OPTIONS.findIndex((opt) => opt.path === pathname);
    if (foundIndex !== -1) setSelectedIndex(foundIndex);
  }, [pathname]);

  // 선택 변경 시 페이지 이동
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    router.replace(STATS_TIME_OPTIONS[index].path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.segmentedControlWrapper}>
        <SegmentedControl
          options={STATS_TIME_OPTIONS.map((opt) => opt.label)}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  segmentedControlWrapper: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 16,
  },
});
