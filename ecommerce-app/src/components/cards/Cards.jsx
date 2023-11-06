import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getAllItemsServices } from '@/services/itemServices'




const Cards = () => {
  // Estado para guardar la info de items de la API
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getAllItemsServices()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error.message)
      }
    }
    getUserData()
  }, [])

  return (
    <>

        {itemsData && itemsData.map((product) => (
          <div className=" w-80  p-4 bg-gray-100 rounded-lg" key={product.id}>
            <div className="img_container   bg-gray-50 rounded-md">
              <img className="object-cover" src={product.image} alt="img" />
            </div>
            <div className="product_info mt-5">
              <h5 className=" text-lg font-semibold ">{product.product_name}</h5>

              <p className=" mt-3 font-bold text-xl text-slate-800">${product.price}</p>
            </div>
          </div>
        )
        )}

    </>
  )
}

export default Cards