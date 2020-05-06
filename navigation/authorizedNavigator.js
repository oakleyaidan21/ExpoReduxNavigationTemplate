import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";

const AuthorizedNavigator = createAppContainer(
  createStackNavigator({
    Home: { screen: Home },
  })
);

export default AuthorizedNavigator;
