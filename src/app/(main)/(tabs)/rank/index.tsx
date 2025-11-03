import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function WeeklyRankPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Weekly Rank Page: Data Fetching Started.");

    setTimeout(() => {
      setData("Weekly");
      setIsLoading(false);
    }, 1500);
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
