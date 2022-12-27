import styled from 'styled-components'

export const HorizontalCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;

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
`
