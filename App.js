/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    AsyncStorage,
} from 'react-native';


export default class App extends React. Component {
  render() {
    return (
      <View style={styles.container}>

            <Text style={{fontSize:20}} onPress={this.saveData}>Save Data</Text>



              <Text style={{fontSize:20}} onPress={this.displayData}>Display Data</Text>

      </View>
    );
  }
  saveData(){
    let obj= {
      name:'Zeeshan',
      email:'zeeshanghalib156@gmail.com',
      city:'Bahawalnagar',
    }
    AsyncStorage.setItem('user',JSON.stringify(obj));
  }
  displayData = async() =>{
    try {
        let user = await AsyncStorage.getItem('user');
        let prased = JSON.parse(user);
        alert(prased.email);
        alert(prased.name);
    }
    catch (error) {
      alert(error);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
