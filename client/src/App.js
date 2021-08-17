import React from 'react'

//importing redux
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

//importing components
import MainComp from './components/MainComp'

//declaring the store
const store=ConfigureStore()


function App() {
  return (
    <Provider store={store}>
         <MainComp />
    </Provider>
    
  )
}

export default App;