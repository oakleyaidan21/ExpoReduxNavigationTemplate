import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Current user: {this.props.user}</Text>
        <Text>Count: {this.props.count}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.props.addToCount();
          }}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: "red" }]}
          onPress={() => {
            this.props.subtractFromCount();
          }}
        >
          <Text style={{ color: "white" }}>Subtract</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="user"
          onChangeText={(text) => {
            this.props.changeUser(text);
          }}
        />
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

const mapStateToProps = (state) => {
  return {
    user: state.persistReducer.currentUser,
    count: state.sessionReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => dispatch({ type: "CHANGE_USER", user }),
    addToCount: () => dispatch({ type: "ADD" }),
    subtractFromCount: () => dispatch({ type: "SUBTRACT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
