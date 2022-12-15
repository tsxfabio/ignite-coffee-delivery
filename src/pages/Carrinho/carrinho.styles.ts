import styled from 'styled-components'

export const PageContainer = styled.main`
  margin-top: 3rem;

  .simpleContainer {
    display: flex;
    flex-direction: column;

    width: 60%;
    border-radius: 6px;
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-100']};

    .titleContainerEndereco {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin-bottom: 2rem;

      span {
        display: block;
        font-family: 'Roboto', sans-serif;
      }

      span:first-child {
        font-size: 1rem;
        line-height: 1.3rem;
      }

      span:last-child {
        font-size: 0.875rem;
      }

      .iconsEndereco {
        color: ${(props) => props.theme['yellow-700']};
      }
    }
  }

  .metodoPagamentoContainer {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;

    width: 60%;
    border-radius: 6px;
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-100']};

    .titlemetodoPagamentoContainer {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin-bottom: 2rem;

      span {
        display: block;
        font-family: 'Roboto', sans-serif;
      }

      span:first-child {
        font-size: 1rem;
        line-height: 1.3rem;
      }

      span:last-child {
        font-size: 0.875rem;
      }

      .iconsPagamento {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    .cardMetodosPagamento {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;

        width: 32.5%;
        gap: 0.25rem;
        border-radius: 6px;
        padding: 1rem 0 1rem 1rem;

        font-size: 0.75rem;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        background-color: ${(props) => props.theme['gray-300']};
      }

      .iconsPagamento {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
