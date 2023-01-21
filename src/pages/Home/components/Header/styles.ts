import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 5.875rem 0;
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
