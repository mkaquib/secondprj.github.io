import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Header from './components/Header'
import Home from './components/Home'
const App =()=>{

  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}
export default App