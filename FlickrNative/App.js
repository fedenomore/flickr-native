import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AlbumList from "./src/components/AlbumList";
import PhotoList from "./src/components/PhotoList";
import Search from "./src/components/Search";
import RandomPhotoGrid from "./src/components/RandomPhotoGrid";
import NavigationService from "./src/services/NavigationService";
import {Router, Scene, Stack} from "react-native-router-flux";
import RouterExtra from "./src/components/RouterExtra";


const tabBarIcon = name => ({ tintColor }) => (
    <MaterialIcons
        style={{ backgroundColor: 'transparent' }}
        name={name}
        color={tintColor}
        size={24}
    />
);

const MainScreenNavigator = createStackNavigator({
    PhotoList: { screen: PhotoList },
});

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

const SwitchNavigator = createSwitchNavigator ({
    BottomMaterialTabs: BottomMaterialTabs,
    MainScreenNavigator: MainScreenNavigator,
});

const AppNavigator = createAppContainer(SwitchNavigator);

export default class App extends Component {
    render() {
        // return <AppNavigator ref={navigatorRef => {
        //     NavigationService.setTopLevelNavigator(navigatorRef);
        // }} />;
        return <RouterExtra/>;


    }
}
