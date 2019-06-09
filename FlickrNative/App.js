import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import AlbumList from "./src/components/AlbumList";
import PhotoList from "./src/components/PhotoList";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <Router>
          <Scene key="root">
            <Scene key="albumList" component={AlbumList} title="Albums" initial={true}/>
            <Scene key="photoList" component={PhotoList} title="Photos"/>
          </Scene>
        </Router>
    );
  }
}

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