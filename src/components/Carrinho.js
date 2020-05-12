import React, { Component } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

const ButtonPosition = styled.nav`
margin: 2vh;
text-align: right;
`
const Container = styled.nav`
background-color: #f2970b;
`
const Itens = styled.nav`
text-align: center;
background-color: #5ce1e6;
width:  90%;
height: 70%;
padding: 2vh;
margin: auto;
margin-bottom:5vh;
`
export class Carrinho extends Component {
    render() {
      return (
        <>
          <Container>
            <Itens>
              <h1>Carrinho de compras</h1>
              <h4>Produtos adicionados:</h4>
              <div>
                <AppBar position="static" color="default">
                  <Toolbar>
                    <Typography variant="h4" color="inherit">
                      Aqui vai os itens                      
                    </Typography>
                  </Toolbar>
                </AppBar>
                <ButtonPosition>                
                  <Button variant="contained" color="secondary">
                    Delete
                    <DeleteIcon/>
                  </Button>
                  <Button variant="contained" color="primary">
                    Pagamento
                    <SendIcon/>                   
                  </Button>     
                </ButtonPosition>
              </div>
            </Itens>
          </Container>
        </>
    )
  }
}
  