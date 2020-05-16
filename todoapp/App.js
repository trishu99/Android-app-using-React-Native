import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import SandBox from './components/sandbox';

/*root component*/
export default function App() {
   const [todos, settodos] = useState([
    { text: 'Learn React Native', key: '1'},
    { text: 'Play Piano', key: '2'},
    { text: 'Exercise at 7AM', key: '3'},
    
   ]);
   
  const pressHandler = (key) => {
    settodos((prevTodos) =>{
      return prevTodos.filter(todos => todos.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){

    settodos((prevTodos) => {
      return [
        {text : text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
    }
    else{
      Alert.alert('OOPs!', 'Todos must be longer than 2 chars', [
        {
          text: 'Understood', onPress: () => console.log('alert closed')
        }
      ]);
    }
  }
  return (
    //<SandBox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <ImageBackground source={require('./assets/todo-splash.png')} style={styles.backgroudImage}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  backgroudImage:{
    flex:1,
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    margin: 20,
  },
});
