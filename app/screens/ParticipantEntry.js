import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { KeyboardAvoidingView, StyleSheet, Pressable, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import ParticipantCard from '../components/ParticipantCard';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { Alert, Keyboard } from 'react-native-web';

function ParticipantEntry({ route, navigation }) {

  const [participant,setParticipant] = useState();
  const [participantNameEntry,setParticipantName] = useState();
  const [participantWeightEntry,setParticipantWeight] = useState();

  const [participants,setParticipants] = useState([]);

  const handleAddParticipant = () => {
    const participantEntry = {participantName: participantNameEntry, participantWeight: participantWeightEntry};
    setParticipant(participantEntry);
    setParticipants([...participants, participantEntry]);
    setParticipant(null);
  }

  const handleDeleteParticipant = (index) => {
    let tempParticipants = [...participants];
    tempParticipants.splice(index, 1);
    setParticipants(tempParticipants);
  }

    return (
  
        <KeyboardAvoidingView style={styles.container}>
            {/*title*/}
            <View style={styles.participantListTitle}>
              <Text style={styles.participantListTitleText}>Participant List</Text>
            </View>

            {/*card display*/}
            <View style={styles.entryList}> 
              {
                participants.map((participant, index) => {
                  return (
                    <TouchableOpacity key={index} onLongPress={() => handleDeleteParticipant(index)}>
                      <ParticipantCard participantName={participant.participantName} participantWeight={participant.participantWeight}/>
                    </TouchableOpacity>
                  )}

                )
              }
            </View>

            {/*participant addition*/}
            <View style={styles.entryInput}>
              <View style={styles.nameEntry}><TextInput placeholder="Participant Name" fontSize={15} onChangeText={text => setParticipantName(text)}/></View>
              <View style={styles.weightEntry}><TextInput placeholder="Weight" fontSize={15} onChangeText={text => setParticipantWeight(text)}/></View>
              <View style={styles.addEntry}><Pressable onPress={() => handleAddParticipant()}><Text style={styles.addText}>+</Text></Pressable></View>
            </View>

            {/*submit button*/}
            <View style={styles.submitButton}>
              <TouchableOpacity onPress={() => navigation.navigate('TournamentDisplay')}>
                <Text style={styles.submitText}>Generate Teams</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.x11gray,
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

    addText: {
      fontSize: 20,
      color: colors.japaneseIndigoBackground,
    },
  });

export default ParticipantEntry;