import { useState, useEffect } from 'react'
import { getMeUserService } from '@/services/userServices'


const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error.message)
      }
    }
    getUserData()
  }, [token])

  return (
    <div className=' mt-24 h-full w-full flex items-center justify-center'>
      <div className=''>
        <h1>Dashboard</h1>
        {userData?.first_name && <h2>First Name: {userData.first_name}</h2>}
        {userData?.last_name && <h2>Last Name: {userData.last_name}</h2>}
        {userData?.gender && <h2>Gender: {userData.gender}</h2>}
        {userData?.role && <h2>Role: {userData.role}</h2>}
      </div>
    </div>
  )
}

export default Dashboard