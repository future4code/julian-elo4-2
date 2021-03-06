import React, { Component } from 'react'

import PaginaComprador from './PaginaComprador';
import { MenuCategorias } from './MenuCategorias'
import { FooterComponent } from './FooterComponent'
import { TelaInicial } from './TelaInicial'
import { Nav } from './Nav/Nav'
import DetalhesProduto from './DetalhesProduto'
import { Carrinho } from './Carrinho';


import styled from 'styled-components'
import axios from "axios";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import HelpIcon from '@material-ui/icons/ContactSupport';

const PageContainer = styled.section`
width: 100vw;
display: grid;
grid-template-areas: 'upperPage'
                     'mainPage'
                     'bottomPage';
grid-template-rows: 1fr 5fr 1fr;
grid-template-columns: 1fr;
`

const NavBar = styled.nav`
grid-area: upperPage;
background-color: #f2970b;
`

const MainContent = styled.section`
grid-area: mainPage;
background-color: #F5F5F5;
display: flex;
justify-content: flex-start;
`

const MenuContent = styled.section`
width: 15%;
background-color: #F5F5F5;
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
  height: 100%;
  border: 1px solid black;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
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
    produtosPorCategoria: [],
    exibeCategoria: false,
    perfilDoUsuario: '',
    inputNomeProduto: '',
    inputCategoriaProduto: '',
    inputPrecoProduto: '',
    inputParcelasProduto: '',
    inputFormasPagamentoProduto: '',
    inputUrlUmProduto: '',
    inputUrlDoisProduto: '',
    inputDescricaoProduto: '',
    paginaCompradorInicio: true,
    mostraCarrinho: false,
    inputPesquise: ''
  }

  componentDidMount = () => {
    this.buscaProdutos();
  }

  buscaProdutos = async () => {
    try {
      const resposta = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products');
      this.setState({produtos: resposta.data.products})
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
        window.alert("Produto cadastrado com sucesso. Boas vendas :)")
        window.location.reload()
      } catch(error) {
        console.log("ERROR")
      }
  }

  selecionaCategoria = (nomeDaCategoria) => {
    const categoriaSelecionada = this.state.produtos.filter(produto => {
      if(produto.category === nomeDaCategoria) {
        return true
      }
    })
    this.setState({produtosPorCategoria: categoriaSelecionada})
    this.setState({exibeCategoria: true})
  }

  exibeTodasCategorias = () => {
    this.setState({exibeCategoria: false})
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

  infoProdutos = () => {
    this.setState({paginaCompradorInicio: !this.state.paginaCompradorInicio})
  }


  mostrarCarrinho = () => {
    this.setState({mostraCarrinho: !this.state.mostraCarrinho})
  }
  onChangePesquisa = (event) => {
    this.setState({inputPesquise: event.target.value})

  }

  render () {
    let carrinhoDeCompras
    if(this.state.mostraCarrinho) {
      carrinhoDeCompras = <Carrinho />
    }
    
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
        <div>
          <Button onClick={this.cadastraProduto} variant="contained">
              Cadastrar Produto
          </Button>
        </div>
      </ContainerCadastro>
    
    const paginaDeEscolha = <TelaInicial 
                              buttonComprar={this.perfilComprador}
                              buttonVender={this.perfilVendedor}
                            />




    const paginaComprador = <div>
                              {carrinhoDeCompras}
                              <PaginaComprador 

                              
                              InputBusca={this.state.inputPesquise} 

                                detalheDoProduto={this.infoProdutos}
                                listaProdutos={this.state.exibeCategoria ? this.state.produtosPorCategoria : this.state.produtos} 

                              />
                            </div>
                            
    let telaDoComprador
    let telaDoVendedor
    let telaDeEscolha
    const logicaPaginaComprador = this.state.paginaCompradorInicio ? paginaComprador : <DetalhesProduto />
    switch (this.state.perfilDoUsuario) {
      case 'comprador':
        telaDoComprador = logicaPaginaComprador
        break
        case 'vendedor':
        telaDoVendedor = paginaCadastro
        break
      default:
        telaDeEscolha = paginaDeEscolha
      } 
      
    const listaDeProdutos = this.state.produtos
    const listaDeCategorias = [...new Set(listaDeProdutos.map((produto) => {
      return produto.category
    }))]
    
    return (
      <PageContainer>
        <NavBar>
          <Nav
           botaoCarrinho={this.mostrarCarrinho}
          InputPesquisa={this.state.inputPesquise}
          OnChangeInput={this.onChangePesquisa}

          />
        </NavBar>
        <MainContent>
          {telaDoComprador && (
          <MenuContent> 
            <MenuCategorias
              exibirCategorias={this.exibeTodasCategorias}
              categoria={listaDeCategorias.sort().map((produto) => {
                return (
                <li>
                  <a href='#' onClick={() => this.selecionaCategoria(produto)}>
                    {produto}
                  </a>
                </li>
                )
              })}
            />
          </MenuContent>)}
          {telaDoComprador}
          {telaDoVendedor}
          {telaDeEscolha}
        </MainContent>
        <Footer>
          <FooterComponent />
        </Footer>       
      </PageContainer>
    )
  }
}