import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, SignUp } from '@/pages'

const RoutesIndex = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    )
  }
  export default RoutesIndex

