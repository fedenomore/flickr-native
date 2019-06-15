import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}><Text>Hola</Text></View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#878787'
        }
    }
);