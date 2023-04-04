import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${variaveis.bgColor};
    color: ${variaveis.textColor};
    margin-bottom: 40px;
  }

  .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const Label = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 16px;
  padding-right: 8px;
`

export default GlobalStyle
