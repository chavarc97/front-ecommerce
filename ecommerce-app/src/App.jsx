import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/header/Header'
import RoutesIndex from '@/routes/RoutesIndex'
import Footer from '@/components/footer/Footer'
import './App.css'


function App() {


  return (
    <>
       <BrowserRouter>
        <Header />
        <RoutesIndex />
        < Footer />
      </BrowserRouter>
    </>
  )
}

export default App
