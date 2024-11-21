import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      status: false
    };
  }

  render() {
    return(
      <View style={styles.container}>

        <Switch
          value={this.state.status}
          onValueChange={ (valorSwitch) => this.setState({status: valorSwitch}) }
          thumbColor={"#ff0000"}
        />

        {/* value recebe os valores criado dentro do constructor
            onValueChange guarda o valor de uma variavel que criamos dentro do valor que puxamos do value
        */}

        <Text style={{textAlign: 'center', fontSize: 30}}>
          {(this.state.status) ? "ativo" : "Inativo"}
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

export default App;