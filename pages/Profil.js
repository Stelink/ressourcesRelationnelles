import * as React from 'react';
import {View, StyleSheet, Image, Button, Text, TouchableOpacity} from 'react-native';
import sasha from '../assets/user.png';
import marianne from '../assets/marianne.jpg';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Profil() {

    return (
        <View style={styles.container}>
            <View style={styles.moveImg}>
                <Image source={sasha} style={styles.img}/>

                <Text style={{fontWeight: 'bold',fontSize: 25}}>SASHA KETCHUM</Text>
                <Text tyle={{fontSize: 15}}>Citoyenne</Text>
            </View>
            <View style={styles.bouton}>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={sasha} style={styles.img}/>
                    <Text style={styles.bouttonOption}>Amis</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={sasha} style={styles.img}/>
                    <Text style={styles.bouttonOption}>Relation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={sasha} style={styles.img}/>
                    <Text style={styles.bouttonOption}>option</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.posteFriend}>
                <Text> 23 Postes</Text>
                <Text>2540 Amis</Text>
            </View>

            <View style={styles.posteClic}>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={marianne} style={styles.img2}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={marianne} style={styles.img2}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={marianne} style={styles.img2}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}>
                    <Image source={marianne} style={styles.img2}/>
                </TouchableOpacity>
            </View>

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
        marginTop: 50,
    },
    bouton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    img: {
        width: 100,
        height: 100,
    },
    img2: {
        width: 150,
        height: 150,
    },
    moveImg: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 50,
    },
    bouttonOption: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    },
    posteClic: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    posteFriend:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
    }
});
