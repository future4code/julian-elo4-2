import React, { Component } from 'react'

import styled from 'styled-components'

const CategoriesList = styled.ul`
list-style-type: none;
`

export class MenuCategorias extends Component {
    render () {
        return (
            <div>
                <h3>Categorias</h3>
                <CategoriesList>
                <li>
                  <a href='#' onClick={this.props.exibirCategorias}>
                      Exibir todas
                  </a>
                </li>
                    {this.props.categoria}
                </CategoriesList>
            </div>
        )
    }
}