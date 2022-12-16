import styled from 'styled-components'

export const PageContainer = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .dadosPedido {
    display: flex;
    flex-direction: column;
    max-width: 60%;

    .simpleContainer {
      display: flex;
      flex-direction: column;

      width: 100%;
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

      width: 100%;
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
  }

  .confirmacaoPedido {
    display: flex;
    flex-direction: column;
    width: 40%;

    .confirmacaoPagamentoContainer {
      background-color: ${(props) => props.theme['gray-100']};
      border-radius: 6px 44px;
      padding: 2.5rem;

      .resumoValor {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;

          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.2s ease-in-out;

          color: ${(props) => props.theme['white-100']};
          background-color: ${(props) => props.theme['yellow-500']};

          :hover {
            background-color: ${(props) => props.theme['yellow-700']};
          }
        }
      }
    }
  }
`
