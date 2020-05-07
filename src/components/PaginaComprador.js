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
  render() {
    return (
      <ContainerPrincipal>

        <CardProduto>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="https://i.picsum.photos/id/816/200/200.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Share
            </Button>
          </CardActions>
        </CardProduto>

        <CardProduto>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="https://i.picsum.photos/id/819/200/200.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Share
            </Button>
          </CardActions>
        </CardProduto>

        <CardProduto>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="https://i.picsum.photos/id/817/200/200.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Share
            </Button>
          </CardActions>
        </CardProduto>

      </ContainerPrincipal>
    );
  }

}


