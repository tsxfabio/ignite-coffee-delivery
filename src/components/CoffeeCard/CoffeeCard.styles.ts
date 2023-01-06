import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  width: 256px;
  //height: 330px;

  .card-elements {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0;

    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding: 0 1rem;
    border-radius: 6px 32px;

    background-color: ${(props) => props.theme['gray-100']};

    //Imagem do café
    img {
      border-radius: 50%;
      margin-top: -20px;
    }

    //Tags - Tipo de café
    .tags {
      display: flex;
      gap: 0.2rem;
      margin-top: 0.75rem;

      .tags-i {
        padding: 4px 8px;

        font-family: 'Roboto', sans-serif;
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;

        border-radius: 100px;
        color: ${(props) => props.theme['yellow-700']};
        background: ${(props) => props.theme['yellow-100']};
      }
    }

    //Título - Nome do café
    h3 {
      margin-top: 1rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
    }

    //Descrição - Descrição do café
    .description {
      margin-top: 0.5rem;
      text-align: center;

      color: ${(props) => props.theme['gray-500']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }

    .info-buy {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 0;
      width: 100%;

      margin-top: 2rem;
      margin-bottom: 1.25rem;

      span {
        color: ${(props) => props.theme['gray-600']};
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 130%;
        text-align: right;

        ::before {
          content: 'R$';
          font-family: 'Roboto', sans-serif;
          font-size: 0.875rem;
        }
      }
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0;

        padding: 0.53125rem;
        border: 1px solid transparent;
        border-radius: 6px;

        background: ${(props) => props.theme['gray-300']};
        //width: 50%;

        .operatorIcons {
          margin: 0;
          padding: 0;
          color: ${(props) => props.theme['purple-500']};
          cursor: pointer;
        }

        input {
          -webkit-appearance: none;
          -moz-appearance: textfield;

          font-size: 1rem;
          text-align: center;
          background-color: ${(props) => props.theme['gray-300']};
          border: 1px solid transparent;
          width: 1.5rem;
          :focus {
            outline: none;
          }
        }
      }
      .cartIcons {
        cursor: pointer;
        background: ${(props) => props.theme['purple-700']};
        #shoppingCart {
          color: ${(props) => props.theme['white-100']};
        }
      }
    }
  }
`
