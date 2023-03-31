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
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export default GlobalStyle
