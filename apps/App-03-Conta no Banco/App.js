import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Switch, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexos: 0,
      sexo: [
        { key: 1, nome: 'Masculino' },
        { key: 2, nome: 'Feminino' },
      ],
      limite: 250,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);
  }

  enviarDados() {
    if (this.state.nome === '' || this.state.idade === '') {
      alert('Preencha todos os campos!')
      return
    }

    alert(
      'Conta aberta com sucesso! \n\n' +
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexo[this.state.sexos].nome + '\n' +
      'Limite: ' + this.state.limite.toFixed(1) + '\n' +
      'Estudante: ' + ((this.state.estudante) ? 'Sim' : 'Não')
    );
  }

  // <Text style={styles.texto}>Nome: {this.state.nome}</Text>
  // <Text style={styles.texto}>Idade: {this.state.idade}</Text>
  // <Text style={styles.texto}>Sexo: {this.state.sexo[this.state.sexos].nome}</Text>
  // <Text style={styles.texto}>Limite: {this.state.limite.toFixed(1)}</Text>
  // <Text style={styles.texto}>Estudante: {(this.states.estudante) ? "Sim" : "Não"}</Text>

  render() {

    let genero = this.state.sexo.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar Nova Conta</Text>
        <View>
          <Text style={styles.label}>Digite seu nome abaixo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome:'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ nome: texto })}
          />
        </View>

        <View>
          <Text style={styles.label}>Digite sua idade:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua idade:'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ idade: texto })}
          />
        </View>

        <View>
          <Text style={styles.label}>Digite seu sexo:</Text>
          <Picker
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => this.setState({ sexos: itemValue })}
            selectedValue={this.state.sexos}
          >
            {genero}
          </Picker>
        </View>

        <View>
          <Text style={styles.label}>Selecione seu limite:</Text>
          <Slider
          style={styles.slider}
            minimumValue={250}
            maximumValue={5000}
            onValueChange={(valorSelecionado) => this.setState({ limite: valorSelecionado })}
            value={this.state.limite}
            minimumTrackTintColor='#0a89a8'
          />
        </View>

        <View>
          <Text style={styles.label}>É estudante:</Text>
          <View style={styles.switch}>
            <Switch
              value={this.state.estudante}
              onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.enviarDados}>
          <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#DCDCDC",
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color: '#09419c',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 8,
  },
  label: {
    color: "#1C1C1C",
    marginLeft: 10,
    fontSize: 17,
    marginTop: 20,
  },
  switch: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  botao: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09419c',
    borderRadius: 150,
    margin: 20
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  },
  slider: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 8,
  },
})

export default App;