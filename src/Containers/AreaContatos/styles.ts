import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Contatos = styled.div`
  background-color: ${variaveis.cardColor};
  padding: 16px;
  border-radius: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  display: block;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-left: 8px;
  border: none;
  background-color: ${variaveis.placeholderBg};

  ::placeholder {
    color: ${variaveis.textColor};
  }
`

export const CampoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: ${variaveis.cardColor};
  width: fit-content;
  padding: 8px;
  border-radius: 8px;
`
