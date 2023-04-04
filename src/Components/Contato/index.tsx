import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'
import { Label } from '../../Styles'
import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const telefoneFix = `(${telefoneOriginal.substring(
    0,
    2
  )}) ${telefoneOriginal.substring(2, 7)} - ${telefoneOriginal.substring(
    7,
    telefoneOriginal.length
  )}`

  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if ((emailOriginal.length, telefoneFix.length > 0)) {
      setEmail(emailOriginal), setTelefone(telefoneFix)
    }
  }, [emailOriginal, telefoneFix])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneFix)
  }

  return (
    <>
      <S.Nome>
        {estaEditando && <em>Editando: </em>} {nome}
      </S.Nome>
      <S.Descricao>
        <Label>E-mail: </Label>
        <S.Info
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        >
          {email}
        </S.Info>
      </S.Descricao>
      <S.Descricao>
        <Label>Telefone:</Label>
        <S.Info
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        >
          {telefoneFix}
        </S.Info>
      </S.Descricao>
      <S.Botoes>
        {estaEditando ? (
          <>
            <S.Salvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.Salvar>
            <S.Remover onClick={() => cancelarEdicao()}>Cancelar</S.Remover>
          </>
        ) : (
          <>
            <S.Remover onClick={() => dispatch(remover(id))}>Remover</S.Remover>
            <S.Editar onClick={() => setEstaEditando(true)}>Editar</S.Editar>
          </>
        )}
      </S.Botoes>
    </>
  )
}

export default Contato
