import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AlbumList from "./src/components/AlbumList";
import PhotoList from "./src/components/PhotoList";
import Search from "./src/components/Search";
import RandomPhotoGrid from "./src/components/RandomPhotoGrid";
import NavigationService from "./src/services/NavigationService";

const tabBarIcon = name => ({ tintColor }) => (
    <MaterialIcons
        style={{ backgroundColor: 'transparent' }}
        name={name}
        color={tintColor}
        size={24}
    />
);

const BottomMaterialTabs = createMaterialBottomTabNavigator(
    {
      Search: {
        screen: Search,
        navigationOptions: {
          tabBarIcon: tabBarIcon("search"),
          tabBarColor: '#311b92',
        }},
      RandomPhotoGrid: {
        screen: RandomPhotoGrid,
        title:'Showcase',
        navigationOptions: {
          tabBarIcon: tabBarIcon("photo-library"),
          tabBarColor: '#00796b',
        }},
      AlbumList: {
        screen: AlbumList,
        title: 'Favorites',
        navigationOptions: {
          tabBarIcon: tabBarIcon("favorite"),
           tabBarColor: '#d81b60',
        }},
    },
    {
      initialRouteName:'RandomPhotoGrid',
      shifting: true,
      // activeColor: '#6200ee',
      // inactiveColor: '#828792',
      barStyle: {
        // backgroundColor: '#f8f7f9',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: '#d0cfd0',
      },
    }
);

const AppNavigator = createAppContainer(BottomMaterialTabs);

export default class App extends Component {
  render() {
    return <AppNavigator ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
    }} />;
  }
}