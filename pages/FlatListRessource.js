import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import RessourceItem from "../components/RessourceItem";


export default function FlatListRessource({items}){

    const renderItem = ({ item }) => {
        return (
            <RessourceItem item={item}/>
        )
    };

    return(
        <View style={{flex: 1}}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const sList = StyleSheet.create({
    text : {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: 'lightgrey',
    },
})
