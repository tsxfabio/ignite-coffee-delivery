import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  width: 256px;
  height: 330px;

  .card-elements {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding: 0 1rem;
    border-radius: 6px 32px;

    background-color: ${(props) => props.theme['gray-100']};

    img {
      border-radius: 50%;
      margin-top: -20px;
    }

    .info-buy {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;

      margin-bottom: 1.25rem;

      span {
      }
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0;

        padding: 0.5rem;
        border: 1px solid transparent;
        border-radius: 6px;

        background: ${(props) => props.theme['gray-300']};
        //width: 50%;

        .operatorIcons {
          margin: 0;
          padding: 0;
        }

        input {
          -webkit-appearance: none;
          -moz-appearance: textfield;

          font-size: 1rem;
          text-align: center;
          background-color: ${(props) => props.theme['gray-300']};
          border: 1px solid transparent;
          width: 2.5rem;
          :focus {
            outline: none;
          }
        }
      }
      .cartIcons {
        background: ${(props) => props.theme['purple-700']};
        #shoppingCart {
          color: ${(props) => props.theme['white-100']};
        }
      }
    }
  }
`
