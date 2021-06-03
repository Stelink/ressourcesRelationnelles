import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Inscription() {

    return (
        <View style={styles.container}>
            <Text h1>Inscription</Text>

            <Text>Nom</Text>
            <TextInput style={styles.inputX } placeholder="Nom"/>

            <Text>Prenom</Text>
            <TextInput style={styles.inputX } placeholder="Prenom"/>

            <Text>Email</Text>
            <TextInput style={styles.input} placeholder="Email"/>

            <Text>Mot de passe</Text>
            <TextInput style={styles.input } placeholder="***"/>

            <Text>Répéter votre mot de passe</Text>
            <TextInput style={styles.input } placeholder="***"/>

            <Button title={"Connexion"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 120,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
    },
    inputX: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        width: 150,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
    }
});

