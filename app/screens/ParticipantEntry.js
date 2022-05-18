import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Pressable, View, Text } from 'react-native';

function ParticipantEntry({ navigation }) {
    return (
        <View style={styles.container}>

            <Text>participant entry screen</Text>

            <Pressable onPress={() => navigation.navigate('TournamentDisplay')}>
                 <Text>Next Screen</Text>
            </Pressable>

        </View>
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

export default ParticipantEntry;