import React, {Component} from 'react';
import {Router, Scene, Stack} from "react-native-router-flux";
import AlbumList from "./AlbumList";
import RandomPhotoGrid from "./RandomPhotoGrid";
import PhotoList from "./PhotoList";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="AlbumList">
                    <Scene key="AlbumList" component={AlbumList} title="AlbumList"/>
                    <Scene key="RandomPhotoGrid" component={RandomPhotoGrid} title="RandomPhotoGrid"/>
                    <Scene key="photoList" component={PhotoList} title="PhotoList"/>
                </Stack>
            </Router>
        );
    }
}