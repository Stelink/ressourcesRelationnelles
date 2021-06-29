import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FlatListRessource from "../pages/FlatListRessource";

export default function ListRessource() {

    const [ressources, setRessources] = useState([{
        id: '1',
        name: 'L’Auvergne et ses volcans',
        img: '../assets/auvergne.png',
        intro: 'L\'Auvergne doit son nom au peuple gaulois des Arvernes. C\'était l\'une des tribus les plus puissantes et les plus riches de la Gaule antique.  '
    },{
        id: '2',
        name: 'ERUNE - Le jeu du futur',
        img: '../assets/ERUNE.png',
        intro: 'Erune est un jeu de plateau d’exploration de donjon couplé à un assistant vocal dans lequel 1 à 4 aventuriers devront faire face ensemble à un Maître du Donjon tout au ...'
    },{
        id: '3',
        name: 'ERUNE - Le jeu du futur',
        img: '../assets/ERUNE.png',
        intro: 'Erune est un jeu de plateau d’exploration de donjon couplé à un assistant vocal dans lequel 1 à 4 aventuriers devront faire face ensemble à un Maître du Donjon tout au ...'
    }]);

    return (
        <FlatListRessource
            items={ressources}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
