import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed:[
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
          renderItem={ ( {item} ) => <Pessoa data={item} /> } //mostrar a lista no app
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 150,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#fff',
    fontSize: 20,
  },
})

export default App;

class Pessoa extends Component{
  render() {
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}> E-mail: {this.props.data.email} </Text>
      </View>
    );
  }
}