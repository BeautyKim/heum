import {
  type MaterialTopTabNavigationEventMap,
  type MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function RankLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <MaterialTopTabs
        screenOptions={{
          lazy: true,
          tabBarStyle: {
            backgroundColor: "rgba(243, 243, 243, 0.3)",
            borderRadius: 30,
            height: 44,
          },

          tabBarIndicatorStyle: {
            backgroundColor: "#FFFFFF",
            height: 44,
            borderRadius: 30,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          },

          tabBarLabelStyle: {
            fontWeight: "500",
            textTransform: "none",
            fontSize: 14,
          },

          tabBarInactiveTintColor: "#FFFFFF",
          tabBarActiveTintColor: "#4285EA",

          tabBarPressColor: "transparent",
          tabBarScrollEnabled: false,
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "Weekly" }} />
        <MaterialTopTabs.Screen name="all" options={{ title: "All Time" }} />
      </MaterialTopTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4285EA",
  },
});
