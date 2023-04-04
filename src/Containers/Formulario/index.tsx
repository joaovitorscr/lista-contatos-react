import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Botao, Container, Form, Titulo } from './styles'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if ((nome.length, email.length, telefone.length <= 0)) {
      alert('Preencha todos os campos para cadastrar um novo contato!')
    } else {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
    }
  }

  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <Form onSubmit={cadastrarContato}>
        <label htmlFor="nome">Nome:</label>{' '}
        <input
          type="text"
          name="nome"
          placeholder="Como ele vai se chamar"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          maxLength={24}
        />
        <label htmlFor="email">E-mail:</label>{' '}
        <input
          type="email"
          name="email"
          placeholder="nome@email.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          maxLength={24}
        />
        <label htmlFor="telefone">Telefone:</label>{' '}
        <input
          type="tel"
          name="telefone"
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          maxLength={11}
        />
        <Botao type="submit">Cadastrar</Botao>
      </Form>
    </Container>
  )
}

export default Formulario
