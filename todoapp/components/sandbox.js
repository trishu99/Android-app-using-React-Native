import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function SandBox(){
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxtwo}>two</Text>
            <Text style={styles.boxthree}>three</Text>
            <Text style={styles.boxfour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems : 'flex-start',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxtwo: {
        backgroundColor: 'blue',
        padding: 10,
    },
    boxthree: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxfour: {
        backgroundColor: 'pink',
        padding: 10,
    },

})