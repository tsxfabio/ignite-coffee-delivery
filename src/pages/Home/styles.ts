import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 5.875rem 10rem;
  height: 544px;

  .titleAndDescriptionHeader {
    width: 60%;
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      line-height: 3.875rem;
    }
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      margin-top: 1rem;
    }

    .iconAndDescriptionHeader {
      display: flex;
      flex-direction: row;

      margin-top: 4.125rem;
      .list1th,
      .list2th {
        width: 50%;
        .listContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 1.25rem;
          .cartIcon {
            box-sizing: content-box;
            border-radius: 50%;
            padding: 0.5rem;
            color: ${(props) => props.theme['white-100']};
            background-color: ${(props) => props.theme['yellow-700']};
          }
          .timerIcon {
            box-sizing: content-box;
            border-radius: 50%;
            padding: 0.5rem;
            color: ${(props) => props.theme['white-100']};
            background-color: ${(props) => props.theme['yellow-500']};
          }
          .packageIcon {
            box-sizing: content-box;
            border-radius: 50%;
            padding: 0.5rem;
            color: ${(props) => props.theme['white-100']};
            background-color: ${(props) => props.theme['gray-600']};
          }
          .coffeeIcon {
            box-sizing: content-box;
            border-radius: 50%;
            padding: 0.5rem;
            color: ${(props) => props.theme['white-100']};
            background-color: ${(props) => props.theme['purple-500']};
          }
          span {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            margin: 0 0 0 0.75rem;
          }
        }
      }
    }
  }
  .navbarImage {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    img {
      height: 90%;
      width: auto;
    }
  }
`
