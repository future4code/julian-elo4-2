import React, { Component } from 'react'
import { MenuCategorias } from './MenuCategorias'
import { Nav } from './Nav/Nav'
import axios from "axios";
import styled from 'styled-components'
import { FooterComponent } from './FooterComponent'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import HelpIcon from '@material-ui/icons/ContactSupport';


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

const ContainerCadastro = styled.div`
  background-color: #F49832;
  width: 100vw;
  height: 50vh;
  border: 1px solid black;
  color: white;
  text-align: center;
`
const Interrogacao = styled(HelpIcon)`
  color: #65E0E5;
`
const TituloCadastro = styled.h2`
  font-size: 2.5rem;
`
const FormularioEnvio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`

const FormInput = styled(TextField)`
  width: 18rem;
  background-color: white;
`
export class AppContainer extends Component {
  state = {
    produtos:[],
    perfilDoUsuario: '',
    produtosFiltradosPorCategoria: [],
    inputNomeProduto: '',
    inputCategoriaProduto: '',
    inputPrecoProduto: '',
    inputParcelasProduto: '',
    inputFormasPagamentoProduto: '',
    inputUrlUmProduto: '',
    inputUrlDoisProduto: '',
    inputDescricaoProduto: ''
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

    cadastraProduto = async () => {
      const body = {
        "name": this.state.inputNomeProduto,
        "description": this.state.inputDescricaoProduto,
        "price": this.state.inputPrecoProduto,
        "paymentMethod": [this.state.inputFormasPagamentoProduto],
        "category": this.state.inputCategoriaProduto,
        "photos": [this.state.inputUrlUmProduto, this.state.inputUrlDoisProduto],
        "installments": this.state.inputParcelasProduto
      }
      
      try {
        const resposta = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products', body)
        console.log("CADASTROU")
      } catch(error) {
        console.log("ERROR")
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

  pegaNomeProduto = (event) => {
    this.setState({inputNomeProduto: event.target.value})
  }

  pegaCategoriaProduto = (event) => {
    this.setState({inputCategoriaProduto: event.target.value})
  }

  pegaPrecoProduto = (event) => {
    this.setState({inputPrecoProduto: Number(event.target.value)})  
  }

  pegaParcelasProduto = (event) => {
    this.setState({inputParcelasProduto: Number(event.target.value)})  
  }

  pegaFormasPagamentoProduto = (event) => {
    this.setState({inputFormasPagamentoProduto: event.target.value})  
  }

  pegaUrlUmProduto = (event) => {
    this.setState({inputUrlUmProduto: event.target.value})  
  }

  pegaUrlDoisProduto = (event) => {
    this.setState({inputUrlDoisProduto: event.target.value})  
  }

  pegaDescricaoProduto = (event) => {
    this.setState({inputDescricaoProduto: event.target.value})
  }


  render() {

    const paginaCadastro =
      <ContainerCadastro>
        <TituloCadastro>O que você deseja vender <Interrogacao fontSize="large"/></TituloCadastro>
        <FormularioEnvio>
          <FormInput
            required
            label="Nome do Produto"
            onChange={this.pegaNomeProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Categoria"
            onChange={this.pegaCategoriaProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Preço R$"
            onChange={this.pegaPrecoProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Parcelas"
            onChange={this.pegaParcelasProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Formas de pagamento"
            onChange={this.pegaFormasPagamentoProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Foto URL 1"
            onChange={this.pegaUrlUmProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            required
            label="Foto URL 2"
            onChange={this.pegaUrlDoisProduto}
            margin="normal"
            variant="filled"
          />
          <FormInput
            label="Descrição"
            onChange={this.pegaDescricaoProduto}
            multiline
            margin="normal"
            variant="filled"
          />
        </FormularioEnvio>
        <Button onClick={this.cadastraProduto} variant="contained">
            Cadastrar Produto
        </Button>
      </ContainerCadastro>


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
          <Nav/>
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
          <FooterComponent />
        </Footer>
      </PageContainer>
    )
  }
}
