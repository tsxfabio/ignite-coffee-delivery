import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 5.875rem 0;
  min-height: 544px;

  .titleAndDescriptionHeader {
    width: 60%;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1444px) {
      //width: 100%;
    }

    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      line-height: 3.875rem;

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
      }
    }
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      margin-top: 1rem;

      @media (max-width: 768px) {
        display: block;
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
      }
    }

    .iconAndDescriptionHeader {
      display: flex;
      flex-direction: row;
      margin-top: 4.125rem;

      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 2.5rem;
      }

      .list1th,
      .list2th {
        width: 50%;

        @media (max-width: 768px) {
          width: 100%;
        }

        .listContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 1.25rem;

          @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
          }

          span {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            margin: 0 0 0 0.75rem;

            @media (max-width: 768px) {
              margin: 0;
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
  .navbarImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    img {
      width: 80%;
    }
    @media (max-width: 768px) {
      display: none;
    }

    @media (min-width: 769px) and (max-width: 1444px) {
      //display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`
