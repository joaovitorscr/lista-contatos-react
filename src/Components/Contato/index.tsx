import ContatoClass from '../../models/Contato'
import { Label } from '../../Styles'
import { Descricao, Nome } from './styles'

type Props = ContatoClass

const Contato = ({ nome, email, telefone }: Props) => {
  const telefoneFix = `(${telefone.substring(0, 2)}) ${telefone.substring(
    2,
    7
  )} - ${telefone.substring(7, telefone.length)}`

  return (
    <>
      <Nome>{nome}</Nome>
      <Descricao>
        <Label>E-mail: </Label>
        <p>{email}</p>
      </Descricao>
      <Descricao>
        <Label>Telefone:</Label>
        <p>{telefoneFix}</p>
      </Descricao>
    </>
  )
}

export default Contato
