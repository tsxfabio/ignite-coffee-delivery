import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  background: ${(props) => props.theme['white-200']};
}
`
