import { Button, View } from "react-native";
import { DataTable } from 'react-native-paper';
import * as React from 'react';

export default function ModifierRelation(){
    let relations = [
        {
            id: 1,
            nom: "David",
            filialite: "Famille" ,
        },
        {
            id: 2,
            nom: "Mathieu",
            filialite: "Amis" ,
        },
        {
            id: 3,
            nom: "Samuel",
            filialite: "Amis" ,
        },
        {
            id: 4,
            nom: "Alizée",
            filialite: "Autre 👀" ,
        },
    ];

    return (
        (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nom</DataTable.Title>
                    <DataTable.Title numeric>Relations</DataTable.Title>
                    <DataTable.Title numeric>Actions</DataTable.Title>
                    <DataTable.Title numeric>Actions</DataTable.Title>
                </DataTable.Header>
                {relations.map(obj => (
                    console.log(obj),
                    <DataTable.Row key={obj.id}>
                        <DataTable.Cell>{obj.nom}</DataTable.Cell>
                        <DataTable.Cell>{obj.filialite}</DataTable.Cell>
                        <DataTable.Cell>
                            <Button title="Edit"/>
                        </DataTable.Cell>
                        <DataTable.Cell>
                            <Button title="Delete"/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        )
    );
}