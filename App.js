import React from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import  ModifierRelation from './pages/ModifierRelation';


export default function App() {


  return (
    ModifierRelation()
  );
}


