/*Example to open a screen out of the Navigation Drawer*/
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class ScreenExternal extends Component {
  render() {
    return (
      <View style={{padding: 20}}>
        <Text>Switched screen which is out of the Navigation Drawer</Text>
      </View>
    );
  }
}
