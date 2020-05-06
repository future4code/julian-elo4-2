import React, { Component } from 'react'
import { MenuCategorias } from './MenuCategorias'
import axios from "axios";
import styled from 'styled-components'

const PageContainer = styled.section`
width: 100vw;
height: 100vh;
display: grid;
grid-template-areas: 'upperPage upperPage'
                     'leftPage rightPage'
                     'bottomPage bottomPage';
grid-template-rows: 1fr 5fr 1fr;
grid-template-columns: 1fr 5fr;
`

const NavBar = styled.nav`
grid-area: upperPage;
background-color: #f2970b;
`

const MainContent = styled.section`
grid-area: rightPage;
background-color: #F5F5F5;
`

const MenuContent = styled.section`
grid-area: leftPage;
background-color: #F5F5F5;
border-right: 1px #202020 solid;
display:flex;
justify-content: center;
`

const Footer = styled.footer`
grid-area: bottomPage;
background-color: #202020;
`

export class AppContainer extends Component {
  state = {
    produtos:[],
    perfilDoUsuario: '',
    produtosFiltradosPorCategoria: []
  }

    componentDidMount = () => {
      this.buscaProdutos();
    }

    buscaProdutos = async () => {
      try {
        const resposta = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products');
        this.setState({produtos: resposta.data.products})
        console.log(this.state.produtos[1].category)
      } catch(error) {
        console.log(error)
      }
    }

  filtroCategoria = (nomeDaCategoria) => {
    const categoriaFiltrada = this.state.produtos.filter(produto => {
      if(produto.category === nomeDaCategoria) {
        return true
      }
    })
    this.setState({produtosFiltradosPorCategoria: categoriaFiltrada})
  }

  perfilComprador = () => {
    this.setState({perfilDoUsuario: 'comprador'})
  }

  perfilVendedor = () => {
    this.setState({perfilDoUsuario: 'vendedor'})
  }

  render() {

    //Popula a lista de categorias antes da integração com a API
    //let listaCategorias = []
    //for(let i = 0; i < 10; i++) {
    //  let categoria = <li>categoria {i}</li>
    //  listaCategorias.push(categoria)
    //}

    let telaDoComprador
    let telaDoVendedor
    let telaDeEscolha
    switch (this.state.perfilDoUsuario) {
      case 'comprador':
       telaDoComprador = '<Componente do Comprador />'
       break
      case 'vendedor':
        telaDoVendedor = '<Componente do Vendedor />'
        break
      default:
        telaDeEscolha = '<Componente de Escolha />'
    } 

    return (
      <PageContainer>
        <NavBar>
          #Navbar
        </NavBar>
        <MainContent>
          {telaDoComprador}
          {telaDoVendedor}
          {telaDeEscolha}
          <br />
          <button onClick={this.perfilComprador}>teste comprador</button>
          <button onClick={this.perfilVendedor}>teste vendedor</button>
        </MainContent>
        <MenuContent>
          <MenuCategorias
            categoria={this.state.produtos.map((produto) => {
              return  <li>
                        <a href='#' onClick={() => this.filtroCategoria(produto.category)}>
                          {produto.category}
                        </a>
                      </li>
            })}
          />
        </MenuContent>
        <Footer>
          #Footer
        </Footer>
      </PageContainer>
    )
  }
}
