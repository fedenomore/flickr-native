import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-navigation';

const randomPhoto = ({ id }) => {
    const PHOTOS = Array.from({ length: 24 }).map(
        (_, i) => `https://unsplash.it/300/300/?random&__id=${id}${i}`
    );

    return (
        <ScrollView contentContainerStyle={styles.content}>
            {PHOTOS.map(uri => (
                <View key={uri} style={styles.item}>
                    <Image source={{ uri }} style={styles.photo} />
                </View>
            ))}
        </ScrollView>
    );
};

export default class RandomPhotoGrid extends Component {
    render() {
        return (
            randomPhoto("album")
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
    },
    item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
});