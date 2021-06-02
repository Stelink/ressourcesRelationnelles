import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Chargement() {

    return (
        <View style={styles.container}>
            <Text h1>Chargement</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    input: {
        height: 40,
    },
});

