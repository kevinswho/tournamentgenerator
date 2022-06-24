import React from 'react';

import { StyleSheet, Pressable, View, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function ParticipantCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.name}><Text style={styles.nameText}>{props.participantName}</Text></View>
            <View style={styles.weight}><Text style={styles.weightText}>{props.participantWeight}</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#a9a9a9',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.onyx,
      },

    name: {
        flex: 0.80,
        alignItems: 'flex-start',
        paddingLeft: 20,
    },

    nameText: {
        color: colors.japaneseIndigoBackground,
        fontSize: 20,
    },

    weight: {
        flex: 0.20,
        alignItems: 'flex-end',
        paddingRight: 20,
    },

    weightText: {
        color: 'white',
        fontSize: 20,
    },
})

export default ParticipantCard;