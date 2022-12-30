import styled from 'styled-components'

export const HorizontalCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;

  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  .imageContainer {
    display: flex;
    align-items: center;
    img {
      overflow: hidden;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }

  .quantidadeContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      .inputContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0;
        padding: 0.5rem;
        border-radius: 6px;

        background: ${(props) => props.theme['gray-300']};

        .operatorIcons {
          color: ${(props) => props.theme['purple-500']};
          cursor: pointer;
          :hover {
            color: ${(props) => props.theme['purple-700']};
          }
        }

        input {
          -moz-appearance: textfield;

          width: 2rem;
          height: 100%;
          text-align: center;
          padding: 0;

          font-family: 'Roboto', sans-serif;
          font-size: 0.75rem;
          border: 1px solid transparent;
          background: ${(props) => props.theme['gray-300']};

          :focus {
            outline: none;
          }
        }
      }

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.25rem;

        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        font-weight: 400;
        text-transform: uppercase;

        background: ${(props) => props.theme['gray-300']};
        border: 1px solid transparent;
        border-radius: 6px;
        padding: 0.5rem;

        cursor: pointer;

        .trashIcon {
          color: ${(props) => props.theme['purple-500']};
        }
        :hover {
          background: ${(props) => props.theme['gray-400']};
        }
      }
    }
  }
`
