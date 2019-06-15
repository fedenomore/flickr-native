import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// Agregar searchbar que al escribir haga la llamada a la API de Flickr mostrando los resultados
// https://www.flickr.com/services/api/flickr.photos.search.html

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}><Text>Search</Text></View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);