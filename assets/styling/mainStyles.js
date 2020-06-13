"use strict";

var React = require("react-native");

var { StyleSheet } = React;

import { Dimensions, Platform } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

module.exports = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  addButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    margin: 5,
  },
  input: {
    padding: 5,
    width: 100,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
});
