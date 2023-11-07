import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import Header from '@/components/header/Header'
import RoutesIndex from '@/routes/RoutesIndex'
import Footer from '@/components/footer/Footer'
import './App.css'


function App() {


  return (
    <>
      
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
            < Footer />
          </BrowserRouter>
        </AuthProvider>
      
    </>
  )
}

export default App
