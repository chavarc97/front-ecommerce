import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { ProductProvider } from '@/context/ProductContext'
import Header from '@/components/header/Header'
import RoutesIndex from '@/routes/RoutesIndex'
import Footer from '@/components/footer/Footer'
import './App.css'


function App() {


  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
            < Footer />
          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>

    </>
  )
}

export default App
