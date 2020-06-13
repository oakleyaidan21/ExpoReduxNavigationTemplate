import React from "react";
import Unauthorized from "../screens/Unauthorized";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function UnauthorizedNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Unauthorized" component={Unauthorized} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
