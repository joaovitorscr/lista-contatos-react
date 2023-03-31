import { Form } from './styles'

const Formulario = () => (
  <Form>
    <label htmlFor="nome">Nome:</label>{' '}
    <input type="text" name="nome" placeholder="Seu nome completo" />
    <label htmlFor="email">E-mail:</label>{' '}
    <input type="email" name="email" placeholder="Seu melhor e-mail" />
    <label htmlFor="telefone">Telefone:</label>{' '}
    <input type="tel" name="telefone" placeholder="(00) 00000-0000" />
  </Form>
)

export default Formulario
