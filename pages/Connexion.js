import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function Connexion() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text h1>Login Screen</Text>
            <Text>Email</Text>
            <TextInput style={{height: 40}} placeholder="citoyen@cesi.fr"/>
            <Text>Mot de passe</Text>
            <TextInput style={{height: 40}} placeholder="Quelagealechien?84ans"/>
            <Button title={"Login"} onPress={() => navigation.navigate('Home') }/>
        </View>
    );
}
