import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function Recherche({navigation}) {
    return (

        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="  Rechercher une ressource"
            />
            <Icon style={styles.searchIcon} name="shield-search" size={20} color="#000"/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingBottom: 10,
    },
    textInput: {
        height: 40,
        width: 325,
    },

});
