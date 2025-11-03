// src/app/rank/index.js (수정)
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function WeeklyRankPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🚨 Weekly 탭이 처음 로드될 때만 이 useEffect가 실행됩니다 (Lazy Loading).
  useEffect(() => {
    // 여기에 Weekly 랭킹 데이터 로딩 로직을 넣으세요.
    console.log("Weekly Rank Page: Data Fetching Started.");

    // 가상의 데이터 로딩 시간
    setTimeout(() => {
      setData("Weekly");
      setIsLoading(false);
    }, 1500);
  }, []); // [] 의존성 배열로 마운트 시점에 한 번만 실행

  return (
    <View style={styles.content}>
      <View style={styles.placeholder}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : (
          <Text style={styles.placeholderText}>{data} 랭킹 데이터</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1, // 화면 전체를 차지하도록 flex: 1 추가
    padding: 16,
    backgroundColor: "#4285EA", // 탭 네비게이터 아래는 흰색으로 변경
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
