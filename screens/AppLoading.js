import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

class AppLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>App is loading...</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppLoading;
