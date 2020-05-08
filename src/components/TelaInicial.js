import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Container = styled.section`
width: 100vw;
height: 100vh;
text-align: center;
background-color: #F5F5F5;
`
const DivCentralizada = styled.div`
background-color: #f2970b;
width: 100vw;
height: 110vh;
margin: auto;
padding-top: 5vh;
display: flex;
flex-direction: column;
padding-top: 8rem;
`
const DivBotoes = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonComprar = styled.div`
margin: 5vw;
display: inline;
`
const ButtonVender = styled.div`
margin: 5vw;
display: inline;
`
export class TelaInicial extends Component {
    render () {
        return (
            <Container>
                <DivCentralizada>
                    <h1>Bem vindo!</h1>
                    <h3>O que você quer fazer?</h3>
                    <DivBotoes>
                        <ButtonComprar>                
                            <Button variant="contained" color="primary" onClick={this.props.buttonComprar}>
                                COMPRAR
                            </Button>
                        </ButtonComprar>
                        <ButtonVender>
                            <Button variant="contained" color="secondary" onClick={this.props.buttonVender}>
                                VENDER
                            </Button>
                        </ButtonVender>
                    </DivBotoes>
                </DivCentralizada>                
            </Container>
        )
    }
}