import { Link } from "react-router-dom"
import { useProductContext } from '@/hooks/useProductContext'
import Loading from "../loading/Loading"





const Cards = () => {
  const { products, loading, setSelectedProduct } = useProductContext()

  return (
    <>

      {loading
        ? 
        <div className="text-center justify-center items-center place-items-center">
          <Loading />
        </div>
        : products.map((product) => (

          <Link to={`/product/${product.id}`} key={product.id}>
            <div className=" w-80  p-4 bg-gray-100 rounded-lg h-96" key={product.id} onClick={() => setSelectedProduct(product)} >
              <div className="img_container   bg-gray-50 rounded-md object-cover">
                <img className="" src={product.image} alt="img" />
              </div>
              <div className="product_info mt-5">
                <h5 className=" text-lg font-semibold ">{product.product_name}</h5>

                <p className=" mt-3 font-bold text-xl text-slate-800">${product.price}</p>
              </div>
            </div>
          </Link>
        )

        )}


    </>
  )
}

export default Cards