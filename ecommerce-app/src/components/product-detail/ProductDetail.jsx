import { useState, useEffect } from "react"

const ProductDetail = () => {
    const [images, setImages] = useState({
        img1: "",
        img2: "",
    })


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