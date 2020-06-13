import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

var s = require("../assets/styling/mainStyles");

export default function Home(props) {
  //redux
  const { currentUser } = useSelector((state) => state.persistReducer);
  const { count } = useSelector((state) => state.sessionReducer);
  const dispatch = useDispatch();

  return (
    <View style={s.defaultContainer}>
      <Text>Home Screen</Text>
      <Text>Current user: {currentUser}</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity
        style={s.addButton}
        onPress={() => {
          dispatch({ type: "ADD" });
        }}
      >
        <Text style={{ color: "white" }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.addButton, { backgroundColor: "red" }]}
        onPress={() => {
          dispatch({ type: "SUBTRACT" });
        }}
      >
        <Text style={{ color: "white" }}>Subtract</Text>
      </TouchableOpacity>
      <TextInput
        style={s.input}
        placeholder="user"
        onChangeText={(text) => {
          dispatch({ type: "CHANGE_USER", user: text });
        }}
        value={currentUser}
      />
    </View>
  );
}
