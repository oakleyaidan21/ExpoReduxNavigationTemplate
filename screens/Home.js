import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => dispatch({ type: "CHANGE_USER", user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
