import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 8px;
    text-align: center;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    border: none;
    background-color: ${variaveis.placeholderBg};

    ::placeholder {
      color: ${variaveis.textColor};
    }
  }

  label {
    margin-bottom: 8px;
  }
`

export const Container = styled.div`
  margin: 40px 0;
`

export const Titulo = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 80px;
`

export const Botao = styled.button`
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #8888;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${variaveis.cardColor};
  color: ${variaveis.textColor};
`
