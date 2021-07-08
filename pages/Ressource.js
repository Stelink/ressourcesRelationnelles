import React, {useState, useEffect} from 'react'
import {Modal, StyleSheet, Text, Alert, View, Image} from 'react-native';


export default function RessourceModal({
                                         visible,
                                         toggle,
                                         item
                                     }) {

    const [fullItem, setFullItem] = useState(null);

    return (

        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={sModal.imageProd}>

                <Text style={sModal.description}> {Modal.name} </Text>
                <Image style={sModal.imageProduit} source={{
                }}/>
                <View style={sModal.imageProd1}>
                </View>
            </View>


            <View style={sModal.ok}>
                <Text style={sModal.ok}>{fullItem.brands_tags}
                </Text>

                <Text style={sModal.ok}>{fullItem.ingredients_text}
                </Text>

                <Text style={sModal.ok}>{fullItem.Brands}
                </Text>
            </View>

            <View style={sModal.button}>
                <Button title="FERMER" onPress={toggle}/>
            </View>


        </Modal>
    )
}

const sModal = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25,
        alignItems: 'center',
    },
    description: {
        width: 180,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',


    },
    imageProd: {
        flex: 1,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
    },
    imageProd1: {
        alignSelf: 'flex-end',
    },
    imageProduit: {
        width: 150,
        height: 150,
        borderRadius: 400 / 2,
    },
    imageNutri: {
        width: 100,
        height: 50,

    },
})
