import { useState, useEffect } from "react"
import { useProductContext } from "@/hooks/useProductContext"

const ProductDetail = () => {
    const { selectedProduct } = useProductContext()


    return (
        <>
        <div className="flex w-full h-full  relative my-32 bg-slate-50 ">

            <div className="lg:flex items-center justify-center w-1/2 mx-8 ">
                <img src={selectedProduct.image} alt="" />
            </div>

            <div className=" lg:flex relative items-center justify-center w-1/2 mx-5">
                <h2 className="text-2xl font-bold ">{selectedProduct.product_name}</h2>
                <h4 className="text-slate-500 font-light mt-5">{selectedProduct.description}</h4>
                <h2 className="text-2xl font-bold mt-8 flex-col-reverse">${selectedProduct.price}</h2>
                <div className=" absolute ">
                    <button className="bg-gradient-to-tr from-blue-500 to-sky-500 text-white font-bold py-2 px-4 rounded-md mt-8 ">Add to cart</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default ProductDetail