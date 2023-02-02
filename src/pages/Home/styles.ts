import styled from 'styled-components'

export const MainContainer = styled.main`
  div {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`
