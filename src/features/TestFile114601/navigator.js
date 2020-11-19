import { createStackNavigator } from "react-navigation-stack";

import Blank from "./screens";

export default BlankBlueprintNavigator = createStackNavigator(
  {
    Test: { screen: Test }
  },
  {
    initialRouteName: "Test"
  }
);
