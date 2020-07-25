import TabAll from "../components/TabAll";
import TabDone from "../components/TabDone";
import TabUndone from "../components/TabUndone";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";

const TabScreen = createMaterialTopTabNavigator(
  {
    Done: { screen: TabDone },
    Undone: { screen: TabUndone },
    All: { screen: TabAll },
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#f8f8f8",
      style: {
        backgroundColor: "#6a197d",
        borderRadius: 5,
        marginTop: 10,
        height: 45,
      },
      labelStyle: {
        textAlign: "center",
        fontSize: 15,
      },
      indicatorStyle: {
        borderBottomColor: "#87B56A",
        borderBottomWidth: 3,
      },
    },
  }
);

const switchNavigator = createSwitchNavigator({
  switch: TabScreen,
});

const TabApp = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
  },
});
export default createAppContainer(switchNavigator);
