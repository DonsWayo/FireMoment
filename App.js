/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomePageScreen";


export default class App extends Component{
  render() {
    return (
        <TabNavigator/>
    );
  }
}


const Tab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,

});

const TabNavigator = createAppContainer(Tab);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
