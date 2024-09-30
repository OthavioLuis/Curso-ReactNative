//Salvando só os arquivos que foram passados na aula!

import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

class App extends Component{
  render() {

    let nome = 'Othavio';

    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Sujeito Programador
        </Text>

        <Text style={{ color: '#0e3ff0' }}>Olá {nome}!</Text>

        <Jobs largura={200} altura={200} fulano="Steeeve"/>

      </View>
    );
  }
}

class Jobs extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image 
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.fulano}</Text>
      </View>
    );
  }
} 

export default App;