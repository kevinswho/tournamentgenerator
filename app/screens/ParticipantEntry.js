import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Pressable, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import ParticipantCard from '../components/ParticipantCard';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

const participants = 

function addParticipant(name, weight) {
  const participant = {
    participantName: name,
    participantWeight: weight
  }

  participants.push(participant);
}

function ParticipantEntry({ route }) {
    return (
  
        <View style={styles.container}>
            <View style={styles.participantListTitle}>
              <Text style={styles.participantListTitleText}>Participant List</Text>
            </View>

            <View style={styles.entryList}>
              <ParticipantCard participantName='fuckyou' participantWeight='69'/>
              <Text>{ route.params.data }</Text>
            </View>

            <View style={styles.entryInput}>
              <View style={styles.nameEntry}><TextInput placeholder="Participant Name" /></View>
              <View style={styles.weightEntry}><TextInput placeholder="Weight" /></View>
              <View style={styles.addEntry}><Pressable><Text>Add</Text></Pressable></View>
            </View>

            <View style={styles.submitButton}>
              <TouchableOpacity onPress={() => navigation.navigate('TournamentDisplay')}>
                <Text style={styles.submitText}>Generate Teams</Text>
              </TouchableOpacity>
            </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.japaneseIndigoBackground,
      alignItems: 'center',
      justifyContent:'center',
      paddingTop: StatusBar.currentHeight + 5,
    },

    participantListTitle: {
      flex: .1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }, 

    participantListTitleText:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black'
    },

    entryList:{
      flex: .7,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    entryInput:{
      flex: .1,
      flexDirection: "row",
      backgroundColor: colors.inputfieldLightBlue,
      width: '100%'
    },

    nameEntry: {
      flex: .6,
      alignItems: 'center',
      justifyContent: 'center',
    },

    weightEntry: {
      flex: .2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.onyx,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },

    addEntry: {
      flex: .2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    submitButton: {
      flex: .1,
      backgroundColor: colors.goButtonGreen,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }, 

    submitText: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold'
    },
  });

export default ParticipantEntry;