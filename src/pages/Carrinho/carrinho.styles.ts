import styled from 'styled-components'

export const PageContainer = styled.main`
  margin-top: 3rem;

  .simpleContainer {
    display: flex;

    width: 60%;
    border-radius: 6px;
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-100']};

    .titleContainerEndereco {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

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
    }
  }
`
