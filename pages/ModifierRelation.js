import { Button, StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';
import * as React from 'react';

export default function ModifierRelation(){
    let relations = [
        {
            id: 1,
            nom: "Deru",
            prenom: "David",
            filialite: "Famille" ,
        },
        {
            id: 2,
            nom: "Molik",
            prenom: "Marc",
            filialite: "Amis" ,
        },
        {
            id: 3,
            nom: "Ronan",
            prenom: "Antoine",
            filialite: "Amis" ,
        },
        {
            id: 4,
            nom: "René",
            prenom: "Alizée",
            filialite: "Autre 👀" ,
        },
    ];

    return (
        (
            <DataTable style={styles.container}>
                <DataTable.Header>
                    <DataTable.Title>Nom</DataTable.Title>
                    <DataTable.Title>Relations</DataTable.Title>
                    <DataTable.Title>Actions</DataTable.Title>
                </DataTable.Header>
                {relations.map(obj => (
                    <DataTable.Row key={obj.id}>
                        <DataTable.Cell>{obj.nom} {obj.prenom}</DataTable.Cell>
                        <DataTable.Cell>{obj.filialite}</DataTable.Cell>
                        <DataTable.Cell>
                            <Button title="E"/>
                            <Button title="X" color="red"/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
});