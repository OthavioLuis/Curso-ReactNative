import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Pessoas from './src/Pessoas';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed:[
        { id: '1', nome: 'Othavio', idade: 10, email: 'othavio@gmail.com'},
        { id: '2', nome: 'Luis', idade: 20, email: 'othavio2@gmail.com'},
        { id: '3', nome: 'Rodrigues', idade: 30, email: 'othavio3@gmail.com'},
        { id: '4', nome: 'Ferreira', idade: 40, email: 'othavio4@gmail.com'},
        { id: '1', nome: 'Othavio', idade: 10, email: 'othavio@gmail.com'},
        { id: '2', nome: 'Luis', idade: 20, email: 'othavio2@gmail.com'},
        { id: '3', nome: 'Rodrigues', idade: 30, email: 'othavio3@gmail.com'},
        { id: '4', nome: 'Ferreira', idade: 40, email: 'othavio4@gmail.com'},
        
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={ this.state.feed } // é a lista de pessoas
          keyExtractor={ (item) => item.id }
          renderItem={ ( {item} ) => <Pessoas data={item} /> } //mostrar a lista no app
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;