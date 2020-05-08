import React, { Component } from 'react'
import './FooterStyle.css'
import styled from 'styled-components'

const ContainerFooter = styled.div`
display: grid;
grid-template-areas: 
  'leftFooter centerFooter rightFooter';
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
`
const Redes = styled.div`
grid-area: centerFooter;
color: white;
text-align: center;
`
const Pagamentos = styled.div`
grid-area: leftFooter;
color: white;
text-align: center;
`
const I = styled.i`
  margin: 5px;
  color: white;
  font-size:30px;
`
const SiteSeguro = styled.div`
grid-area: rightFooter;
color: white;
text-align: center;
`
const Copyright = styled.div`
color: white;
text-align: center;
margin-top: 5vh;
`
export class FooterComponent extends Component {
  render() {
    return (
      <>
        <ContainerFooter>         
          <Pagamentos>
            <p>Formas de Pagamento:</p>            
            <a href='#'><I className="fab fa-cc-mastercard"></I></a>
            <a href='#'><I className="fab fa-cc-visa"></I></a>
            <a href='#'><I className="fab fa-cc-paypal"></I></a>
            <a href='#'><I className="fab fa-cc-amex"></I></a>
            <a href='#'><I className="fab fa-cc-diners-club"></I></a>
            <a href='#'><I className="fab fa-cc-barcode"></I></a>
          </Pagamentos>
          <Redes>
            <p>Siga-nos nas Redes Sociais</p>            
            <a href='#'><I className="fab fa-instagram"></I></a>
            <a href='#'><I className="fab fa-facebook"></I></a>
            <a href='#'><I className="fab fa-twitter"></I></a>
            <a href='#'><I className="fab fa-whatsapp"></I></a>
          </Redes>
          <SiteSeguro>
            <p><a href='#'><I className="fas fa-shield-alt"></I></a> Site Seguro</p>            
            <a href='#'><I className="fas fa-lock"></I></a>              
          </SiteSeguro>        
        </ContainerFooter>
        <Copyright>Arthur - Isaac - Jerry - Murilo &copy;elo4 2020 labenu</Copyright>        
      </>
    )
  }
}
  
