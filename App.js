import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ParticipantEntry from "./app/screens/ParticipantEntry"; 
import TournamentDisplay from "./app/screens/TournamentDisplay"
import About from "./app/screens/About"
import OptionsEntry from './app/screens/OptionsEntry';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="OptionsEntry" component={OptionsEntry} />
        <Stack.Screen name="ParticipantEntry" component={ParticipantEntry} />
        <Stack.Screen name="TournamentDisplay" component={TournamentDisplay} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
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
