import styled from 'styled-components'

const cores = {
  'purple-500': '#8047F8',
  'yellow-500': '#DBAC2C',
  'yellow-700': '#C47F17',
}

export const DetalhesDaCompraContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-700']};
  }

  .rowContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const DetalhesPedidoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 48%;
  margin-top: 2.5rem;
  padding: 2.5rem;

  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1.5px solid transparent;

  @media (max-width: 1100px) {
    width: 100%;
  }

  .cardDetalhes {
    display: flex;
    flex-direction: row;

    margin-bottom: 2rem;

    .cardDetalhesIcon {
      margin-right: 0.75rem;
    }

    .cardDetalhesText {
      display: flex;
      flex-direction: column;

      span {
        font-style: 'Roboto', sans-serif;
        font-size: 1rem;
      }
    }
  }
`

export const ImagemPedidoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  width: 48%;

  @media (max-width: 1100px) {
    display: none;
  }
`
