import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'João Vitor',
      email: 'joaovitor@gmail.com',
      telefone: '43000000000'
    },
    {
      id: 2,
      nome: 'Rogerio',
      email: 'rogerio@gmail.com',
      telefone: '43999999999'
    },
    {
      id: 3,
      nome: 'Cleiton',
      email: 'cleiton@gmail.com',
      telefone: '43888888888'
    },
    {
      id: 4,
      nome: 'Alexander',
      email: 'alexander@gmail.com',
      telefone: '43777777777'
    }
  ]
}

const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato já existe!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { cadastrar, editar, remover } = ContatosSlice.actions
export default ContatosSlice.reducer
