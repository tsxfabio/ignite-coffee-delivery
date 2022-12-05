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
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;

      span {
      }
      input {
        width: 30%;
      }
    }
  }
`
