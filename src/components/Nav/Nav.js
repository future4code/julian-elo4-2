import React, { Component } from 'react'
import styled from 'styled-components'
import logoA from './logoA.png'
import logoB from './logoB.png'

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const NavContainer = styled.div`
    display: flex
    align-items: center
`

const LogoContainer = styled.div`
    width: 30vw
`

const SearchContainer = styled.div`
    display: flex
    align-items: center;
    margin-top: 3rem!important;
`

const LogoA = styled.img`
    height: 160px
`

const StyledTextField = styled(TextField)`
    background: white
`

const LogoB = styled.img`
    
`

export class Nav extends Component {
    render() {
        return (
            <NavContainer>
                <LogoContainer>
                    <LogoA src={logoA}/>
                    <LogoB src={logoB}/>
                </LogoContainer>
                
                <SearchContainer>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <StyledTextField placeholder="Pesquise"/>
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </SearchContainer>        
            </NavContainer>
        )
    }
}

export class NavTeste extends Component {
    render() {
        return (
            <div></div>
        )
    }
}