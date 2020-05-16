import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Keep Working... <AntDesign name="smileo" size={24} color="white" /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'rgba(128,128,128, 0.7)',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
});