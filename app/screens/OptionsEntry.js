import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Pressable, View, Text, StatusBar } from 'react-native';
import { useState } from 'react';

import colors from '../config/colors';

function OptionsEntry({ navigation }) {

    const [numberOfTeams, setNumberOfTeams] = useState(2);

    return (
        <View style={styles.container}>
            <View style={styles.intro}>
                <Text style={styles.introText}>With this app you can take a group of people, assign weights to them for things like skill level, and make randomized balanced teams.</Text>

                <View style={styles.amountEntry}>
                    <TextInput style={styles.amountInput} keyboardType='number-pad' maxLength={2} selectionColor='black' onChangeText={(val) => setNumberOfTeams(val)}/>
                </View>

                <Text style={styles.introText}>Enter the number of teams you would like to have to get started.</Text>
            </View>

            <View style={styles.submitButton}>
                <TouchableOpacity onPress={() => navigation.navigate('ParticipantEntry', {data: numberOfTeams})}>
                    <Text style={styles.submitText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
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

    intro: {
        flex: .9,
        alignItems: 'center',
        justifyContent:'center',
    },

    introText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },

    amountEntry: {
        height: 100,
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
    },

    amountInput: {
        width: 100,
        height: '80%',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#b2beb5',
        textAlignVertical: 'center',
        borderRadius: 15,
    },

    submitButton: {
        flex: .1,
        height: 70,
        backgroundColor: colors.goButtonGreen,
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

export default OptionsEntry;