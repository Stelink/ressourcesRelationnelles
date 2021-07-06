import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Chargement from "../pages/Chargement";
import Connexion from "../pages/Connexion";
import Inscription from "../pages/Inscription";
import ModifierRelation from '../pages/ModifierRelation';
import Profil from "../pages/Profil";
import CreateRessources from "../pages/CreateRessources";
import ListRessource from "../pages/ListRessource";
import Recherche from "../pages/Recherche";

export default function Navigation() {

    const tab = createBottomTabNavigator();

    const sListRessource = createStackNavigator();

    const stackListRessource = () => {
        return (
            <sListRessource.Navigator>
                <sListRessource.Screen name="Ressources" component={ListRessource} />
            </sListRessource.Navigator>
        )
    }

    const sRecherche = createStackNavigator();

    const stackRecherche = () => {
        return (
            <sRecherche.Navigator>
                <sRecherche.Screen name="Ressources" component={Recherche} />
            </sRecherche.Navigator>
        )
    }

    const sProfil = createStackNavigator();

    const stackProfil = () => {
        return (
            <sProfil.Navigator>
                <sProfil.Screen name="Profil" component={Profil} />
            </sProfil.Navigator>
        )
    }

    const sCreateRessource = createStackNavigator();

    const stackCreateRessource = () => {
        return (
            <sCreateRessource.Navigator>
                <sCreateRessource.Screen name="Créer une ressource" component={CreateRessources} />
            </sCreateRessource.Navigator>
        )
    }

    const sModifier = createStackNavigator();

    const stackModifier = () => {
        return (
            <sModifier.Navigator>
                <sModifier.Screen name="Modifier" component={ModifierRelation} />
            </sModifier.Navigator>
        )
    }

    const sChargement = createStackNavigator();

    const stackChargement = () => {
        return (
            <sChargement.Navigator>
                <sChargement.Screen name="Chargement" component={Chargement} />
            </sChargement.Navigator>
        )
    }

    const sInscription = createStackNavigator();

    const stackInscription = () => {
        return (
            <sInscription.Navigator>
                <sInscription.Screen name="Inscription" component={Inscription}/>
            </sInscription.Navigator>
        )
    }

    const sConnexion = createStackNavigator();

    const stackConnexion = () => {
        return (
            <sConnexion.Navigator>
                <sConnexion.Screen name="Connexion" component={Connexion}/>
            </sConnexion.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name="Accueil" component={stackListRessource} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}/>
                <tab.Screen name="Recherche" component={stackRecherche} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shield-search" color={color} size={size} />
                    ),
                }}/>
                <tab.Screen name="Ressources" component={stackCreateRessource} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={size} />
                    ),
                }}/>
                <tab.Screen name="Connexion" component={stackConnexion} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}/>
            </tab.Navigator>
        </NavigationContainer>
    )

}
