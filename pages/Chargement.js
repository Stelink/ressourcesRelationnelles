import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import marianne from '../assets/marianne.jpg';
import logo from '../assets/logo.png';

export default function Chargement() {

    return (
        <View style={styles.container}>
            <Text style={styles.titreText}>CHARGEMENT</Text>
            <Image source={marianne} style={{ width: 300, height: 155 }} />
            <Image source={logo} style={{ width: 300, height: 155 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titreText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

