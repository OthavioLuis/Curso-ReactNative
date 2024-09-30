import React, { Component } from "react";
import { View, Text } from 'react-native';

class App extends Component{
  render() {
    return(
      <View style={{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'stretch', 
        justifyContent: 'space-between' 
      }}>
        <View style={{ height: 65, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ width: 50 ,  height: 65, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 65, backgroundColor: 'yellow' }}></View>


      </View>
    );
  }
}

export default App;