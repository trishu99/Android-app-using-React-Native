/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {createSwitchNavigator} from 'react-navigation';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
  Image,
  AsyncStorage,
} from 'react-native';

/*import {
  AsyncStorage
} from '@react-native-community/async-storage';*/

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const userInfo = {username:'admin', password:'12345'};

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''}
  }

  static navigationOptions = {
    headerStyle:{height: 55, backgroundColor: 'rgb(93, 194, 201)'},
    headerTitleStyle: {fontWeight: 'bold', color:'rgb(8, 88, 158)', fontSize:30, textAlign:"center"}
  };

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./assets/login.png')} style={styles.topimg}></Image>
        <TextInput
          style={styles.input}
          placeholder='username'
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}
          onPress={this._signin}
        >
          <Text style={styles.btnText}>LogIn</Text>

        </TouchableOpacity>
      </View>
    )
  }

  _signin = async () =>{
    if(userInfo.username == this.state.username && userInfo.password === this.state.password){
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('App');
    }
    else{
      alert('incorrect');
    }
  }
}

class HomeScreen extends React.Component{

  static navigationOptions = {
    headerStyle:{height: 55, backgroundColor: 'rgba(93, 194, 201, 0.6)'},
    headerTitleStyle: {fontWeight: 'bold', color:'green', fontSize:30, textAlign:"center"}
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Wel<Text style={styles.welcome2}>Come</Text></Text>
          <Image source={require('./assets/welcome.png')} style={styles.welimg}/>
        <TouchableOpacity 
        onPress={this._logout}>
          <Text style={styles.logbtntext}>LogOut</Text>
          </TouchableOpacity> 
      </View>
    )
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

class AuthLoadingScreen extends React.Component{
  constructor(props){
    super(props);
    this._loadData()
  }
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle='default'/>
      </View>
    )
  }
  _loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== '1' ? 'Auth' : 'App'); 
  }
}

const AppStack = createStackNavigator({ Home : HomeScreen})
const AuthStack = createStackNavigator({InLoc : LoginScreen})

export default createAppContainer(
  createSwitchNavigator(
   {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
   },
   {
     initailRouteName: 'Auth',
   }
  )
)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    borderRadius:10,
    padding: 8,
    margin: 10,
    width: 300, 
    fontSize:25,
  },
  welcome:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'green',
    fontWeight:"300",
  },
  welcome2:{
    color:'rgb(51, 153, 255)',
    fontWeight:"200",
    fontStyle: 'italic',
  },
  btn: {
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 15,
    marginRight: 15,
    padding:10,
  },
  header:{
    fontSize: 30,
    marginBottom:30,
  },
  btnText:{
    color: 'rgb(8, 88, 158)',
    backgroundColor: 'rgb(93, 194, 201)',
    padding:10,
    borderRadius:10,
    fontSize: 30,
    width: 300, 
    textAlign:"center",
    fontWeight: "bold",
  },
  logbtntext:{
    color: 'green',
    fontSize:22,
    fontWeight:'bold',
    padding:10,
    borderRadius:10,
    textAlign:"center",
    backgroundColor:'rgba(51, 153, 255,0.6)',
  },
  topimg:{
    width:200,
    height:200,
    //marginBottom:30,
  },
  welimg:{
    width:200,
    height:200,
  }
});

