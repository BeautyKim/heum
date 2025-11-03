import { usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatsPage() {
  const pathname = usePathname();
  const [period, setPeriod] = useState('week');

  // URL에 따라 기간 구분
  useEffect(() => {
    if (pathname.includes('month')) setPeriod('month');
    else if (pathname.includes('year')) setPeriod('year');
    else setPeriod('week');
  }, [pathname]);

  return (
    <View style={styles.content}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>{period} 데이터</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  placeholder: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 48,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  placeholderText: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
  },
});
