/*Example to open a screen out of the Navigation Drawer*/
import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

export default class Screen4 extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 23}}> การจอง </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
