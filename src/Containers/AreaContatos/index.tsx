import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../Components/Contato'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as S from './styles'

const AreaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo != undefined) {
      contatosFiltrados = itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <div>
      <S.CampoContainer>
        <span className="material-symbols-outlined">search</span>
        <S.Campo
          type="text"
          placeholder="Nome do contato"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </S.CampoContainer>
      <S.Lista>
        {contatos.map((c) => (
          <S.Contatos key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </S.Contatos>
        ))}
      </S.Lista>
    </div>
  )
}

export default AreaContatos
