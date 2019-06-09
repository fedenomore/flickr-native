// /**
//  * @format
//  */
// import React from 'react';
// import { AppRegistry, View } from 'react-native';
// import Header from './src/components/header';
// import AlbumList from './src/components/AlbumList';
// import PhotoList from './src/components/PhotoList';
// import { Router, Scene } from 'react-native-router-flux';
//
// // Create a component
// const App = () => (
//     <Router>
//     <Scene key="root">
//     <Scene key="albumList" component={AlbumList} title="Albums" initial={true} />
// <Scene key="photoList" component={PhotoList} title="Photos" />
//     </Scene>
//     </Router>
// );
//
// // Render it to the device
// AppRegistry.registerComponent('albums', () => App);


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);