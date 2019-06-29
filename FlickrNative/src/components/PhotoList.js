import React, { Component } from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import NavigationService from "../services/NavigationService";
import Button from "./Button";
import {AndroidBackHandler} from "react-navigation-backhandler";

class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
      const {navigation} = this.props;
      const id = navigation.getParam('albumId', 0);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${id}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
        .then(response => { this.setState({ photos: response.data.photoset.photo }); });
  }

  renderAlbums() {
    return this.state.photos.map(photo =>
      <PhotoDetail key={photo.title} title={photo.title} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    );
  }

  render() {
    console.log(this.state);


    if (!this.state.photos) { 
			return (
                <View style={{ flex: 1 }}>
					<Text>
                        Loading...
					</Text>
                </View>
				);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList style={{ flex: 2 }} data={this.state.photos}
            renderItem={({item}) =>  <PhotoDetail key={item.id} title={item.title}
                imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} />}
            />
            {/*<ScrollView>*/}
              {/*{this.renderAlbums()}*/}
            {/*</ScrollView>*/}
        </View>
    );
  }
}

export default PhotoList;
