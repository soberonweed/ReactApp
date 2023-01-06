import { Text, View, Button, StyleSheet, TouchableOpacity,typography} from 'react-native'
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style ={StyleSheet.styleLogin}>
        Login
      </Text>
        <Text> Hello World </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text> Login </Text>
      </TouchableOpacity>
      </View>
      
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#000000',
    
    fontStyle: 'Italic',
    fontSize: 48,  
    padding: 10,
    margin: 15,
    height: 40,

    
  },

  styleLogin: {
    position: "absolute",
    left: 12,
    top: 238,
    width: 120,
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "Share_700",
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",

  }
})


export default App

 