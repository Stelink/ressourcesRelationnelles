import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import user from "../assets/user.png";

export default function Inscription({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={user} style={{ width: 150, height: 150, marginTop: 25}} />

            <View style={styles.nomPrenom}>

                <View style={{marginRight: 50}}>
                    <Text>Nom</Text>
                    <TextInput style={styles.inputX } placeholder="     Nom"/>
                </View>

                <View>
                    <Text>Prenom</Text>
                    <TextInput style={styles.inputX } placeholder="     Prenom"/>
                </View>

            </View>
            <Text>Email</Text>
            <TextInput style={styles.input} placeholder="     Email"/>

            <Text>Mot de passe</Text>
            <TextInput style={styles.input } placeholder="     ***"/>

            <Text>Répéter votre mot de passe</Text>
            <TextInput style={styles.input } placeholder="     ***"/>

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
        width: 350,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 10,
    },
    inputX: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        width: 150,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 10,
    },
    nomPrenom: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 75,
        justifyContent: 'space-between',
    }
});

