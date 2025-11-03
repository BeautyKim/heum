// src/app/rank/all.js (새로 생성/수정)
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function AllTimeRankPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🚨 All Time 탭이 처음 선택될 때만 이 useEffect가 실행됩니다 (Lazy Loading).
  useEffect(() => {
    // 여기에 All Time 랭킹 데이터 로딩 로직을 넣으세요.
    console.log("All Time Rank Page: Data Fetching Started.");

    // 가상의 데이터 로딩 시간
    setTimeout(() => {
      setData("All Time");
      setIsLoading(false);
    }, 2000); // Weekly와 구별을 위해 더 긴 로딩 시간 가정
  }, []); // [] 의존성 배열로 마운트 시점에 한 번만 실행

  return (
    <View style={styles.content}>
      <View style={styles.placeholder}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#333" />
        ) : (
          <Text style={styles.placeholderText}>{data} 랭킹 데이터</Text>
        )}
      </View>
    </View>
  );
}

// styles는 index.js의 것을 재사용하거나 필요에 따라 수정하세요.
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4285EA",
  },
  placeholder: {
    borderRadius: 16,
    padding: 48,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
  },
  placeholderText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
  },
});
