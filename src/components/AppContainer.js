import React, { Component } from 'react';
import axios from "axios";

export class AppContainer extends Component {
  state = {
    produtos:[]
  }

  componentDidMount = () => {
    this.buscaProdutos();
  }

  buscaProdutos = async () => {
    try {
      const resposta = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products');
      this.setState({produtos: resposta.data.products})
    } catch(error) {
      console.log("ERROR")
    }
    
  } 

  mostraProdutos = () => {
    console.log(this.state.produtos)
  }

  render() {
    return (
      <div>
          <button onClick={this.mostraProdutos}>Console</button>
      </div>
    )
  }
}
