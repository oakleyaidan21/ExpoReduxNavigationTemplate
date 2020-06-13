import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function AppLoading() {
  return (
    <View style={styles.container}>
      <Text>App is loading...</Text>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
