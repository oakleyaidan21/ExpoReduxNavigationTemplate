import React from "react";
import { View, Text } from "react-native";

var s = require("../assets/styling/mainStyles");

export default function Unauthorized(props) {
  return (
    <View style={s.defaultContainer}>
      <Text>Unauthorized</Text>
    </View>
  );
}
