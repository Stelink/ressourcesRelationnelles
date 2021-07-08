import * as React from 'react';
import {View, StyleSheet, Image, Button, Text, TouchableOpacity, Pressable} from 'react-native';
import sasha from '../assets/user.png';
import marianne from '../assets/marianne.jpg';
import option from '../assets/profil/option.png';
import relation from '../assets/profil/relation.png';
import profilPic from '../assets/profil/api_thumb_450.jpg';
import erune from '../assets/ERUNE.png';
import auvergne from '../assets/auvergne.png';



export default function Profil({navigation}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button style={styles.headerButton}
                        onPress={() => navigation.navigate('Connexion')}
                        title="..."
                        color= "#000"
                />

            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.moveImg}>
                <Image source={profilPic} style={styles.profilPic}/>
                <Text style={{fontWeight: 'bold',fontSize: 25}}>BILL KETCHUM</Text>
                <Text tyle={{fontSize: 15}}>Citoyenne</Text>
            </View>
            <View style={styles.bouton}>
                <TouchableOpacity>
                    <Image source={sasha} style={styles.img}/>
                    <Text style={styles.bouttonOption}>Amis</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Modifier')} >
                    <Image source={relation} style={styles.img}/>
                    <Text style={styles.bouttonOption}>Relation</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={option} style={styles.img}/>
                    <Text style={styles.bouttonOption}>option</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.posteFriend}>
                <Text> 23 Postes</Text>
                <Text>2540 Amis</Text>
            </View>

            <View style={styles.posteClic}>
                <TouchableOpacity>
                    <Image source={erune} style={styles.img2}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={auvergne} style={styles.img2}/>
                </TouchableOpacity>
            </View>
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
    profilPic: {
        width: 150,
        height: 150,
        borderRadius: 100,
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
    },
    headerButton:{
        padding: 15,
    }
});
