import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
           <View style={styles.element}>
            <MaterialIcons name='delete' size={28} color='#333'/>
            <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    element: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginTop:  18,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    itemText: {
        marginLeft: 10,
        fontSize: 22,
    }
});