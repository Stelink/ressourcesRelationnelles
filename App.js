import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Chargement from "./pages/Chargement";
import Navigation from "./components/Navigation";

export default function App() {
  return (
      Navigation()
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
