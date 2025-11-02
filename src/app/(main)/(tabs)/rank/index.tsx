import { usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RankPage() {
  const pathname = usePathname();
  const [period, setPeriod] = useState("weekly");
  const [data, setData] = useState(null);

  // URL에 따라 기간 구분
  useEffect(() => {
    if (pathname.includes("all")) setPeriod("all");
    else setPeriod("weekly");
  }, [pathname]);

  return (
    <View style={styles.content}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>{period} 랭킹 데이터</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: "#4285EA",
  },
  placeholder: {
    borderRadius: 16,
    padding: 48,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
    backgroundColor: "#4285EA",
  },
  placeholderText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
  },
});
