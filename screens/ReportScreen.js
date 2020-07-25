import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TabApp from '../navigation/ReportTabNavigator';
import { withNavigationFocus } from 'react-navigation';

class ReportsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: props.screenProps.todos,
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.setState({
        somethingToRender: 0,
      })
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.dateTime}>{(new Date()).toDateString()}</Text>
          </View>
          
        </View>
        <TabApp screenProps={{ todos: this.state.todos }}/>
      </View>
    )
  }
}

ReportsScreen.navigationOptions = {
  title: "Reports"
};

export default withNavigationFocus(ReportsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  today: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateTime: {
    fontSize: 18,
    fontWeight: '700',
  },
});
