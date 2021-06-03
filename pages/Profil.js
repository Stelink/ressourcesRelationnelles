import * as React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import sasha from '../assets/sasha.jpg';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Profil() {

    return (
        <View style={styles.container}>
            <Image source={sasha} style={{ width: 100, height: 100, alignContent: 'center' }}/>
            <Button title="Amis"/>
            <Button title="Relations"/>
            <DropDownPicker
                items={[
                    {label: 'Item 1', value: 'item1'},
                    {label: 'Item 2', value: 'item2'},
                ]}
                defaultIndex={0}
                containerStyle={{height: 40}}
                onChangeItem={item => console.log(item.label, item.value)}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
});