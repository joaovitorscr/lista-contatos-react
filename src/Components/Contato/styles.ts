import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const Nome = styled.h3`
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 16px;
  text-align: center;
`

export const Info = styled.textarea`
  resize: none;
  border: none;
  color: ${variaveis.textColor};
  background-color: transparent;
  font-size: 16px;
`

export const Descricao = styled.div`
  display: flex;
`

export const Card = styled.div`
  background-color: ${variaveis.cardColor};
`

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`

export const Botao = styled.button`
  color: ${variaveis.textColor};
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`

export const Remover = styled(Botao)`
  background-color: red;
`

export const Editar = styled(Botao)`
  background-color: green;
`

export const Salvar = styled(Botao)`
  background-color: yellow;
`
