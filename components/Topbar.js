import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";

export default function Topbar() {
  return (
    <View
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Explore
      </Text>
    </View>
  );
}
