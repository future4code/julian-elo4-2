import React, { Component } from 'react'
import styled from 'styled-components'
import { FooterComponent } from './FooterComponent'


const PageContainer = styled.section`
width: 100vw;
height: 100vh;
display: grid;
grid-template-areas: 'upperPage upperPage'
                     'leftPage rightPage'
                     'bottomPage bottomPage';
grid-template-rows: 1fr 5fr 1fr;
grid-template-columns: 1fr 3fr;
`

const NavBar = styled.nav`
grid-area: upperPage;
background-color: #f2970b;
`

const MainContent = styled.section`
grid-area: rightPage;
background-color: #F5F5F5;
`

const MenuContent = styled.section`
grid-area: leftPage;
background-color: #F5F5F5;
border-right: 1px #202020 solid;
`

const Footer = styled.footer`
grid-area: bottomPage;
background-color: #202020;
`

export class AppContainer extends Component {
  render() {
    return (
      <PageContainer>
        <NavBar>
          #Navbar
        </NavBar>
        <MainContent>
          #Produtos
        </MainContent>
        <MenuContent>
          #Categorias
        </MenuContent>
        <Footer>
          <FooterComponent />
        </Footer>
      </PageContainer>
    )
  }
}
