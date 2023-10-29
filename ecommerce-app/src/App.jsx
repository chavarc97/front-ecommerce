import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import RoutesIndex from '@/routes/RoutesIndex'

import './App.css'

function App() {


  return (
    <>
       <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
