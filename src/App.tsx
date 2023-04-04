import { Provider } from 'react-redux'

import GlobalStyle, { Container } from './Styles/index'
import AreaContatos from './Containers/AreaContatos'
import Formulario from './Containers/Formulario'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Formulario />
        <AreaContatos />
      </Container>
    </Provider>
  )
}

export default App
