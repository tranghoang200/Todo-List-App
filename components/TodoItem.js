import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      refresh: this.props.refresh,
    };
  }
  deleteItem = () => {
    Alert.alert(
      "",
      "Delete this todo item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            this.props.deleteItem(this.state.item);
          },
        },
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigate("TodoDetails", this.state);
          }}
        >
          <Text style={styles.title}>{this.state.item.title}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View
            style={styles.status}
            backgroundColor={this.state.item.isDone ? "#92D04E" : "#E84946"}
          >
            {this.state.item.isDone ? (
              <MaterialIcons name="done-all" size={30} color="#fff" />
            ) : (
              <Feather name="x" size={30} color="#fff" />
            )}
          </View>
          <TouchableOpacity onPress={this.deleteItem}>
            <View style={styles.status} backgroundColor="#0aa0f6">
              <Feather name="trash-2" size={30} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 80,
    backgroundColor: "#faf15d",
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    maxWidth: 220,
  },
  status: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
