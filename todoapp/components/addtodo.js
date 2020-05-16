import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import {Button} from 'react-native-elements'

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo ...'
                placeholderTextColor='black'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' titleStyle={{fontSize: 23}}  
                 buttonStyle={{
                    backgroundColor: 'rgba(128,128,128, 0.7)',
                    borderRadius: 60,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  input:{
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      fontSize: 25,
      //borderBottomColor: '$ddd',
  }  
})