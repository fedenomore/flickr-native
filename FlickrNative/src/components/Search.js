import React, {Component} from 'react';
import {View, TextInput, FlatList, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
// Agregar searchbar que al escribir haga la llamada a la API de Flickr mostrando los resultados
// https://www.flickr.com/services/api/flickr.photos.search.html

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            searchBarFocused: false,
            photos: [],
            url: 'https://pixabay.com/api/?key=12850286-0dd7fc0d071a1f9cb78e208a5&q=yellow+flowers&image_type=photo'
        }
    }
    
      componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

        this.getPhotos();
      }

      getPhotos = () => {
        this.setState({loading: true})

        axios.get(this.state.url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    photos: response.hits,
                    loading: false
                })
            })
      };
    
      keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
      }
    
      keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
      }
    
      keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
      }
      render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{ height: 80, backgroundColor: '#c45653', justifyContent: 'center', paddingHorizontal: 5 }}>
    
              <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                  <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24 }} />
                </Animatable.View>
                <TextInput placeholder="Search" style={{ fontSize: 18, marginLeft: 15, flex: 1 }} />
              </Animatable.View>
    
            </View>
    
            <FlatList
              style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
              data={this.state.photos}
              renderItem={({ item }) => <View style={thumbnailContainerStyle}>
                                            <Image
                                                style={thumbnailStyle}
                                                source={{ uri: item.largeImageURL }}
                                            />
                                        </View>}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
    }
}