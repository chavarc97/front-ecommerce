import { createContext, useState, useEffect } from 'react'
import {getAllItemsServices, getOneItemService} from '@/services/itemServices'
import { useProductContext } from '@/hooks/useProductContext'

const ProductContext = createContext()

function ProductProvider({children}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
      const getUserData = async () => {
        try {
          const response = await getAllItemsServices();
          if (response.status === 200) {
            setProducts(response.data);
            setLoading(false);
          }
        } catch (error) {
          console.log('Error al obtener datos de productos:', error.message);
        }
      }
      getUserData();
    }, []);

      const data = {
        products,
        loading,
        selectedProduct,
        setSelectedProduct,
        search,
        setSearch,
      }

      return (
        <ProductContext.Provider value={data}>
          {children}
        </ProductContext.Provider>
      )
}

export {
  ProductContext,
  ProductProvider,
}