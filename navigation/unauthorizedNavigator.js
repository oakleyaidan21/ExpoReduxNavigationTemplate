import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Unauthorized from "../screens/Unauthorized";

const UnauthorizedNavigator = createAppContainer(
  createStackNavigator({
    Unauthorized: { screen: Unauthorized },
  })
);
export default UnauthorizedNavigator;
