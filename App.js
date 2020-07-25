import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { todos } from "./data/todos";

import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator screenProps={{ todos: this.state.todos }} />
      </View>
    );
    //}
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
