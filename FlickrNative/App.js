import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AlbumList from "./src/components/AlbumList";
import PhotoList from "./src/components/PhotoList";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import Search from "./src/components/Search";

const BottomTabNavigator = createBottomTabNavigator({
  Search: {screen: Search},
  AlbumList: {screen: AlbumList},
  PhotoList: {screen: PhotoList}
}),;
const AppNavigator = createAppContainer(BottomTabNavigator);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}