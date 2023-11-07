import { useState, useEffect } from "react"
import { useProductContext } from "@/hooks/useProductContext"

const ProductDetail = () => {
    const { selectedProduct } = useProductContext()


    return (
        <div>
            <img src="" alt="" />
            <div className="flex flex-row justify-between h-16">
                <img src="" alt="" className="w-16 h-16 rounded-md" />
                <img src="" alt="" className="w-16 h-16 rounded-md" />
                <img src="" alt="" className="w-16 h-16 rounded-md" />
                <img src="" alt="" className="w-16 h-16 rounded-md" />
            </div>
        </div>
    )
}

export default ProductDetail