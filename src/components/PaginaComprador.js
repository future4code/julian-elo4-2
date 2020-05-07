import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const ContainerPrincipal = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    
`
const CardProduto = styled(Card)`
  width: 16rem;
  height: 25rem;
`

export default class PaginaComprador extends React.Component {
  // componentDidMount = () => {
  //   console.log(this.props.listaProdutos)
  // }

  render() {
    const produtosLista = this.props.listaProdutos.map(produto => {
      return (
        <CardProduto>
          <CardActionArea>
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
        {produtosLista}
      </ContainerPrincipal>
    );
  }

}


