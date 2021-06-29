import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import ERUNE from "../assets/ERUNE.png";

export default function RessourceItem(props){

    return (
        <TouchableOpacity >
            <View style={sScrollItem.container}>
                <Text style={sScrollItem.title}>{props.item.name}</Text>
                <Text style={{fontSize: 10}}>{props.item.img}</Text>
                <Image source={ERUNE} style={{ width: 300, height: 155 }} />
                <Text style={sScrollItem.subtitle}>{props.item.intro}</Text>
            </View>
        </TouchableOpacity>
    )
}

const sScrollItem = StyleSheet.create({
    container: {
        paddingLeft: 40,
        paddingVertical: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    subtitle : {
        fontSize: 18,
    },
    title : {
        fontSize: 26,
        fontWeight: 'bold'
    }
});
