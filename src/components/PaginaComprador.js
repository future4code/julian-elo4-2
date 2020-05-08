import React from 'react';
import styled from 'styled-components';
import { BarraFiltro } from './BarraFiltro'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const ContainerPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1.5rem;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    
`
const CardProduto = styled(Card)`
  width: 16rem;
  margin: 2rem;
`

export default class PaginaComprador extends React.Component {
  state = {
    valorOrdenacao: 'default',
    produtos: [],
    ordemPreco:[],
    ordemAlfabetica: [],
    ordemCategoria:[],
    valorMinimo: '',
    valorMaximo: '',
    filtroPorIntervalo: []
  }

  onChangeMinimo = (event) => {
    this.setState({valorMinimo: Number(event.target.value)})
  }
  
  onChangeMaximo = (event) => {
    this.setState({valorMaximo: Number(event.target.value)})
  }

  filtrarPorIntervalo = () => {
    this.setState({produtos: this.state.produtos = this.props.listaProdutos})
    this.setState({valorOrdenacao: 'intervalo'})
    const intervaloPreco = this.state.produtos.filter((produto) => {
      if(produto.price > this.state.valorMinimo && produto.price < this.state.valorMaximo) {
        return true
      }
    })
    this.setState({filtroPorIntervalo: this.state.filtroPorIntervalo = intervaloPreco})
  }

  ordemPreco = () => {
    this.setState({produtos: this.state.produtos = this.props.listaProdutos})
    this.setState({valorOrdenacao: 'preco'})
    let ordenacaoPreco = this.state.produtos.sort(function(a, b) {
      return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
    })
    this.setState({ordemPreco: this.state.ordemPreco = ordenacaoPreco})
  }

  ordemAlfabetica = () => {
    this.setState({produtos: this.state.produtos = this.props.listaProdutos})
    this.setState({valorOrdenacao: 'nome'})
    let ordenacaoAlfabetica = this.state.produtos.sort(function(a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })
    this.setState({ordemAlfabetica: this.state.ordemAlfabetica = ordenacaoAlfabetica})
  }
  
  ordemCategoria = () => {
    this.setState({produtos: this.state.produtos = this.props.listaProdutos})
    this.setState({valorOrdenacao: 'categoria'})
    let ordenacaoCategoria = this.state.produtos.sort(function(a, b) {
      return (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)
    })
    this.setState({ordemCategoria: this.state.ordemCategoria = ordenacaoCategoria})
  }

  selecionatOrdenacao = (event) => {
    this.setState({valorOrdenacao: event.target.value})
    switch (event.target.value) {
      case 'preco':
        return this.ordemPreco()
      case 'nome':
        return this.ordemAlfabetica()
      case 'categoria':
        return this.ordemCategoria()
      default:
        return 'default';
    }
  }

  render() {

    let ordenacao
    switch (this.state.valorOrdenacao) {
      case 'preco':
        ordenacao = this.state.ordemPreco        
        break;
      case 'nome':
        ordenacao = this.state.ordemAlfabetica
        break;
      case 'categoria':
        ordenacao = this.state.ordemCategoria
        break;
      case 'intervalo':
        ordenacao = this.state.filtroPorIntervalo
        break;
      default:
        ordenacao = this.props.listaProdutos
        break;
    }

    const produtosLista = ordenacao.map(produto => {
      return (
        <CardProduto>
          <CardActionArea onClick={this.detalhesDoProduto}>
            <CardMedia
              component="img"
              alt={produto.name}
              height="200"
              image={produto.photos[0]}
              title={produto.name}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {produto.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h3">
                R$ {produto.price}
              </Typography>
              <Typography component="p">
                {produto.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Comprar
            </Button>
          </CardActions>
        </CardProduto>
      )
    })

    return (
      <ContainerPrincipal>
        <BarraFiltro
          valorMinimo={this.onChangeMinimo}
          valorMaximo={this.onChangeMaximo}
          aoFiltarIntervaloPreco={this.filtrarPorIntervalo}
          selectOrdenacao={this.selecionatOrdenacao.bind(this)}                           
        />
        <ContainerCards>
          {produtosLista}
        </ContainerCards>   
      </ContainerPrincipal>
    );
  }

}


