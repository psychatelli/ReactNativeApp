import React, { Component } from 'react';

import { StyleSheet, Container, Text, View, TouchableHighlight } from 'react-native';

export default class First extends React.Component {

    render() {

        return (
            <View style={styles.container}>
            
			<Text style={styles.largeText}> THIS IS FIRST </Text>
            
			<TouchableHighlight style={styles.button}> 
                    <Text> I wont do something</Text>
            </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dddfd4',
    },
    largeText: {
        flex: 1,
        paddingTop: 40,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'red',

    }
});

