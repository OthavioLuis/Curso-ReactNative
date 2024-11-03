import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      valor: 50
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Slider
          minimuValue={0}
          maximuValue={100}
          onValueChange={ (valorSelecionado) => this.setState({valor : valorSelecionado})}
          value={this.state.valor}
          minimumTrackTintColor="#000"
          maximumTrackTintColor='#FF0000'
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>
          Você tem {this.state.valor.toFixed(1)} KG
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
  },
})