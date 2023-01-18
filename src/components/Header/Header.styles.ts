import styled from 'styled-components'

export const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${(props) => props.theme['white-200']};

    padding: 0;
    height: 6.5rem;
    width: 100%;

    .navbar-logo {
    }

    .navbar-links {
      display: flex;
      flex-direction: row;
      justify-content: end;
    }
  }
`

export const BaseMenuLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 0.8rem;
  padding: 0.5rem;
  border-radius: 8px;

  text-decoration: none;
`

export const CidadeLink = styled(BaseMenuLink)`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};
`

export const CartLink = styled(BaseMenuLink)`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    text-align: center;

    margin-left: 1.2rem;
    margin-bottom: 2.2rem;
    padding: 0.1rem 0.4rem;
    border-radius: 50%;
    position: absolute;
    z-index: 1;

    color: ${(props) => props.theme['white-100']};
    background: ${(props) => props.theme['yellow-700']};
  }
`
