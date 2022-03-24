import GlobalStyle from '@/global.styled'

import { AppWrapper, AppFrame } from './app.styled'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Filter from './Filter'
import Greeting from './Greeting'
import { Provider } from 'jotai'

function App() {

  return (
    <Provider>
      <AppWrapper>
        <GlobalStyle />
        <AppFrame>
          <Greeting />
          <TodoInput />
          <Filter />
          <TodoList />
        </AppFrame>
      </AppWrapper>
    </Provider>
  )
}

export default App
