import React from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  width: 100%;
`
const DetalhesProdutoParteUm = styled.div`
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const DetalhesProdutoParteDois = styled.div`
  height: 50vh;
  display: grid;
  justify-content: flex-start;
  padding: 8rem;
`
const ImagemProduto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProdutoInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default class DetalhesProduto extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <DetalhesProdutoParteUm>
          <ImagemProduto>
            <img src="https://i.picsum.photos/id/484/300/300.jpg" />
          </ImagemProduto>
          <ProdutoInfos>
            <h2>Nome do Produto</h2>
            <span>R$ XX.XX</span>
            <span> Em até X parcelas</span>
            <p>Formas de pagamento</p>
            <ul>
              <li>Forma 1</li>
              <li>Forma 2</li>
            </ul>
            <button>Comprar</button>

          </ProdutoInfos>
        </DetalhesProdutoParteUm>
        <DetalhesProdutoParteDois>
          <p><strong>Categoria: </strong>categoria A</p>
          <h3>Descrição:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In elit quam, finibus non nisi vel, ultricies finibus tellus. 
            Mauris ut libero non magna eleifend consequat ut eget tellus. 
            Fusce sed velit a massa aliquet ornare. Maecenas a suscipit nibh. 
            Duis placerat velit at diam ultrices gravida. 
            Fusce laoreet dui a neque egestas pretium. 
          </p>
        </DetalhesProdutoParteDois>
      </ContainerPrincipal>
    );
  }

}


