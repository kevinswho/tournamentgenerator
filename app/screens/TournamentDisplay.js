import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Pressable, View, Text } from 'react-native';

function TournamentDisplay({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>TournamentDisplay Screen</Text>
            <Pressable onPress={() => navigation.navigate('About')}>
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

export default TournamentDisplay;