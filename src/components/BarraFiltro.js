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

export class BarraFiltro extends Component {
    render() {
        return (
            <FiltroContainer>
                <ValorContainer>
                    <ValorMinimo>
                        <label>De</label>
                        <StyledTextField
                            onChange={this.props.valorMinimo} 
                            placeholder="Valor mínimo"
                        />
                    </ValorMinimo>
                    <ValorMaximo>
                        <label>até</label>
                        <StyledTextField
                            onChange={this.props.valorMaximo}
                            placeholder="Valor máximo" 
                        />
                    </ValorMaximo>
                    <button onClick={this.props.aoFiltarIntervaloPreco}>filtrar</button>
                </ValorContainer>
                <div>
                    <span>Ordenar por: </span>
                    <select onChange={this.props.selectOrdenacao}>
                        <option vaule='default'> - </option>
                        <option value="preco">Preço</option>
                        <option value="nome" >Nome</option>
                        <option value="categoria" >Categoria</option>
                    </select>
                </div>
            </FiltroContainer>
        )
    }
}