import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../features/home/Home";
import Details from "../features/details/Details";

const NavigationStack = createStackNavigator({
  Home: { screen: Home },
  Details: { screen: Details }
});

export default createAppContainer(NavigationStack);
