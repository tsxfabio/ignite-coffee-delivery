import styled from 'styled-components'

export const DetalhesDaCompraContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;
  border: 1px solid red;

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
`

export const DetalhesPedidoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 48%;
  margin-top: 2.5rem;
  padding: 2.5rem;

  border: 1px solid red;
`

export const IconeDetalhesCard = styled.div.attrs((props) => ({
  background: props.background,
}))``
