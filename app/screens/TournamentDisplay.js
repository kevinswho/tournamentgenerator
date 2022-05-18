import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Pressable, View, Text } from 'react-native';

function TournamentDisplay({ navigation }) {
    return (
        <View>
            <Text>TournamentDisplay Screen</Text>
            <Pressable onPress={() => navigation.navigate('About')}>
                 <Text>Next Screen</Text>
            </Pressable>
        </View>
    );
}

export default TournamentDisplay;