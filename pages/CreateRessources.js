import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, Picker, Button} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function CreateRessources() {

    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View style={styles.container}>
            <View style={styles.fichier}>
                <Text style={{marginRight: 20}}>Titre</Text>
                <TextInput style={styles.input} placeholder="Titre"/>
            </View>
            <View style={styles.commentaire}>
                <Text style={{marginRight: 20}}>Desciption</Text>
                <TextInput style={{width: 300, height:150, borderColor: 'black', borderWidth: 1}} placeholder="  Description"/>
            </View>
            <View style={styles.fichier}>
                <Text style={{marginRight: 20}}>Fichier : </Text>
                <TextInput style={styles.input} placeholder="Inserer un fichier "/>
            </View>
            <View style={styles.pickers}>
                <View style={styles.pickersMargin}>
                    <Text>Catégorie</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={styles.pickersMargin}>
                    <Text>Type</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={styles.pickersMargin}>
                    <Text>Relation</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={styles.pickersMargin}>
                    <Text>Visibilité</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
            <Button
                title={"Publier"}
                style={{}}
                onPress={() => navigation.navigate('Profil')}
            />
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 300,
    },
    pickers: {
        marginBottom: 50,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pickersMargin: {
        marginTop: 35,
    },
    fichier: {
        flexDirection: 'row',
    },
    commentaire:{
        marginTop: 50,
        marginBottom: 50,
    }
});

