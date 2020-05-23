import React, { Component } from "react";
import Unauthorized from "../screens/Unauthorized";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

const Stack = createStackNavigator();

class UnauthorizedNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Unauthorized" component={Unauthorized} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(UnauthorizedNavigator);
