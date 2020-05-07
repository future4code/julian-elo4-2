import React, { Component } from 'react'
import styled from 'styled-components'

import TextField from "@material-ui/core/TextField";

const FiltroContainer = styled.div`
  background-color: #5ce1e6;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ValorContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
`

const ValorMinimo = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
`

const ValorMaximo = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
`

const StyledTextField = styled(TextField)`
  background: white;
`;

export class Filtro extends Component {
    render() {
        return (
            <FiltroContainer>
                <span>Filtrar: </span>
                <ValorContainer>
                <ValorMinimo>
                    <label>De</label>
                    <StyledTextField placeholder="Valor mínimo"/>
                </ValorMinimo>
                <ValorMaximo>
                    <label>até</label>
                    <StyledTextField placeholder="Valor máximo" />
                </ValorMaximo>
                </ValorContainer>
                <div>
                    <span>Ordenar por: </span>
                    <select>
                        <option>Preço</option>
                        <option>Nome</option>
                        <option>Categoria</option>
                    </select>
                </div>
            </FiltroContainer>
        )
    }
}