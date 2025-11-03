import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function AllTimeRankPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("All Time Rank Page: Data Fetching Started.");

    setTimeout(() => {
      setData("All Time");
      setIsLoading(false);
    }, 2000);
  }, []);

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
