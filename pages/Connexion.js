import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View, Linking} from 'react-native';
import user from "../assets/user.png";
import Profil from "./Profil";
import {Link, NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Connexion({navigation}) {
    return (

        <View style={styles.container}>

            <Text style={styles.titreText}>Login Screen</Text>
            <Image source={user} style={{ width: 150, height: 150}} />
            <Text>Email</Text>
            <TextInput style={styles.textInput} placeholder="     citoyen@cesi.fr"/>

            <Text>Mot de passe</Text>
            <TextInput style={styles.textInput} placeholder="     ******"/>

            <Button
                title={"Connexion"}
                style={styles.buttonLog}
                onPress={() => navigation.navigate('Profil')}
            />

            <Text style={styles.textLink}
                  onPress={() => navigation.navigate('Profil')}>
                Mot de passe oublié ?
            </Text>
            <Link to={Profil}>tt</Link>
            <Text style={styles.textLink}
                  onPress={() => navigation.navigate('Inscription')}>
                Pas de compte ? Inscrivez-vous !
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titreText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        paddingTop: 25,
    },
    textInput: {
        height: 40,
        width: 250,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 25,
    },
    buttonLog: {
        marginTop: 50,

    },
    textLink: {
        color: 'blue',
        marginTop: 20,
    },
});
