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

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 3rem;
        text-align: center;
      }
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
    @media (max-width: 768px) {
      width: 100%;
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
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`
