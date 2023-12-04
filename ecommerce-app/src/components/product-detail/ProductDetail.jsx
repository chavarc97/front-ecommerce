
import { useProductContext } from "@/hooks/useProductContext"

const ProductDetail = () => {
    const { selectedProduct } = useProductContext()


    return (
        <>
            <section className=" pt-32 pb-12 lg:py-12 h-full flex items-center my-16">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">

                        <div className=" flex flex-1 justify-center items-center mb8 lg:mb-0">
                            <img className=" max-w-[200px] lg:max-w-sm rounded-sm" src={selectedProduct.image} alt="" />
                        </div>
                        <div className="flex flex-1 text-center lg:text-left mt-6">
                            <h1 className=" text-[26px] font-bold mb-2 max-w-[450px] mx-auto">{selectedProduct.product_name}</h1>
                        </div>
                        <div className="text-2xl font-semibold text-red-500 mb-6 ">
                            $ {selectedProduct.price}
                        </div>
                        <p className="mb-8 mx-24 text-center">{selectedProduct.description}</p>
                        <button className="bg-gradient-to-tr from-blue-500 to-sky-500  rounded-md px-4 py-2 text-white">Add to cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail