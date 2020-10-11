/*Example to open a screen out of the Navigation Drawer*/
import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';
import ScreenExternal from './pages/ScreenExternal';
import ScreenInternal from './pages/ScreenInternal';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.jpg')}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Forest Tour ',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  ScreenInternal: {
    screen: ScreenInternal,
    navigationOptions: ({navigation}) => ({
      title: 'Screen With Navigation Drawer',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: 'Staff',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Customer',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen4,
    navigationOptions: ({navigation}) => ({
      title: 'Packget',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen5_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen5,
    navigationOptions: ({navigation}) => ({
      title: 'Booking',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Forest Tour',
    },
  },

  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Staff',
    },
  },

  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Customer',
    },
  },
  Screen4: {
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Packget',
    },
  },
  Screen5: {
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Booking',
    },
  },
});

const DrawerNavigatorExample = createStackNavigator({
  Drawer: {screen: Drawer, navigationOptions: {header: null}},
  ScreenExternal: {
    screen: ScreenExternal,
    navigationOptions: {title: 'Screen External'},
  },
});
export default createAppContainer(DrawerNavigatorExample);
