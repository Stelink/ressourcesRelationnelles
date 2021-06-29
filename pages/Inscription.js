import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import user from "../assets/user.png";

export default function Inscription({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.titreText}>Inscription</Text>
                <Image source={user} style={{ width: 150, height: 150}} />
                <View style={styles.nomPre}>
                 <View style={styles.nom}>
                      <Text>Nom</Text>
                      <TextInput style={styles.inputX } placeholder="     Nom"/>
                 </View>
                 <View style={styles.prenom}>
                      <Text>Prenom</Text>
                      <TextInput style={styles.inputX } placeholder="     Prenom"/>
                 </View>
            </View>
            <Text>Email</Text>
            <TextInput style={styles.input} placeholder="     Email"/>

            <Text>Mot de passe</Text>
            <TextInput style={styles.input } placeholder="     ******"/>

            <Text>Répéter votre mot de passe</Text>
            <TextInput style={styles.input } placeholder="     ******"/>

            <Button title={"Inscription"}/>
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
        marginBottom: 20,
    },
    inputX: {
        height: 40,
        width: 150,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,

    },
    nom:{
        marginRight:50,
    },
    nomPre: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 70,
    },
    titreText: {
         fontSize: 30,
         fontWeight: 'bold',
    },
});

